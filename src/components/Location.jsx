import { useEffect, useRef, useState } from "react"
import * as tt from '@tomtom-international/web-sdk-maps'
import * as ttapi from '@tomtom-international/web-sdk-services'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import { ImLocation } from 'react-icons/im';
import { RiUserLocationFill } from 'react-icons/ri';
import ReactDOMServer from 'react-dom/server';
import { useSelector } from "react-redux";



const Location = () => {
  const darkValue = useSelector((state)=>state.dark.isDark);
  const mapElement = useRef();
  const [map, setMap] = useState({});
  const [longitude, setLongitude] = useState(45.416107);
  const [latitude, setLatitude] = useState(35.566864);

  const convertToPoints = (lngLat) => {
    return {
      point: {
        latitude: lngLat.lat,
        longitude: lngLat.lng
      }
    }
  }

  const drawRoute = (geoJson, map) => {
    if (map.getLayer('route')) {
      map.removeLayer('route')
      map.removeSource('route')
    }
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geoJson
      },
      paint: {
        'line-color': '#4a90e2',
        'line-width': 6
  
      }
    })
  }

  const addDeliveryMarker = (lngLat, map) => {
    const iconAsString = ReactDOMServer.renderToString(<RiUserLocationFill size={24} color="red" />);
    const domParser = new DOMParser();
    const element = domParser.parseFromString(iconAsString, 'text/html').body.firstChild;

    new tt.Marker({
        element: element
    })
        .setLngLat(lngLat)
        .addTo(map)
}

  useEffect(() => {
    const origin = {
      lng: longitude,
      lat: latitude,
    }
    const destinations = []

    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
      stylesVisibility: {
        trafficFlow: true,
        trafficIncidents: true
      },
      center: [longitude, latitude],
      zoom: 13
    });
    setMap(map);

    const addMarker = () => {
      const popupOffset = {
          bottom: [0, -25]
      }
      const popup = new tt.Popup({ offset: popupOffset }).setHTML('We Are Here!')
  
      const iconAsString = ReactDOMServer.renderToString(<ImLocation size={24} color="red" />);
      const domParser = new DOMParser();
      const element = domParser.parseFromString(iconAsString, 'text/html').body.firstChild;
  
      const marker = new tt.Marker({
          draggable: true,
          element: element,
      })
      .setLngLat([longitude, latitude])
      .addTo(map);
  
      marker.on('dragend', () => {
          const lngLat = marker.getLngLat();
          setLongitude(lngLat.lng);
          setLatitude(lngLat.lat);
      });
  
      marker.setPopup(popup).togglePopup();
  }
  
    addMarker()

    const sortDestinations = (locations) => {
      const pointsForDestinations = locations.map((destination) => {
        return convertToPoints(destination)
      })
      const callParameters = {
        key: process.env.REACT_APP_TOM_TOM_API_KEY,
        destinations: pointsForDestinations,
        origins: [convertToPoints(origin)],
      }

    return new Promise((resolve, reject) => {
      ttapi.services
        .matrixRouting(callParameters)
        .then((matrixAPIResults) => {
          const results = matrixAPIResults.matrix[0]
          const resultsArray = results.map((result, index) => {
            return {
              location: locations[index],
              drivingtime: result.response.routeSummary.travelTimeInSeconds,
            }
          })
          resultsArray.sort((a, b) => {
            return a.drivingtime - b.drivingtime
          })
          const sortedLocations = resultsArray.map((result) => {
            return result.location
          })
          resolve(sortedLocations)
        })
      })
    }

    const recalculateRoutes = () => {
      sortDestinations(destinations).then((sorted) => {
        sorted.unshift(origin)

        ttapi.services
          .calculateRoute({
            key: process.env.REACT_APP_TOM_TOM_API_KEY,
            locations: sorted,
          })
          .then((routeData) => {
            const geoJson = routeData.toGeoJson()
            drawRoute(geoJson, map)
        })
      })
    }


    map.on('click', (e) => {
      destinations.push(e.lngLat)
      addDeliveryMarker(e.lngLat, map)
      recalculateRoutes()
    })

    return () => map.remove();
  }, []);

  return (
    <>
    {map && (
        <div className={darkValue ? "flex flex-col max-w-6xl mx-auto justify-center h-[600px] md:h-[800px] w-screen text-black px-4 ": "flex flex-col max-w-6xl mx-auto justify-center h-[550px] md:h-[800px] w-screen  px-4"}>
          {/* Top Text */}
          <div className={darkValue ? "pb-2 text-white italic my-4":"pb-2 italic my-4"}>
            <h1 className='text-center text-xl font-bold '> Practice TO Find Yourself Location</h1>
            <p className='text-center capitalize'> choose Your current location for find you and fastly giving your delivery! 
            when Find Location Yourself Just Click Your Location</p>
          </div>
          {/* Map */}
          <div ref={mapElement} className="h-full w-full "></div>  
        </div>
    )}
</>
  )
}
export default Location;
