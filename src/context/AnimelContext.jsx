import { createContext, useContext, useState} from "react";
import {faker} from '@faker-js/faker'; // Adjusted import for faker

const AnimelContext = createContext({})

export const useAnimelContext = () => {
    return useContext(AnimelContext)
}

export const AnimelContextProvider = ({ children }) => {
    faker.seed(99)
    const animal = Array(20).fill().map(() => ({
      id: faker.number.int(),
      username: faker.internet.userName(),
      price: faker.commerce.price(),
      image: faker.image.urlLoremFlickr({ category: 'animals' }),
      discription: faker.lorem.lines(),
      category: faker.animal.type()
  
  }));

  const[animalCarts,setAnimalCarts] = useState([])

  const getQuantityByID = (id) => {
    return animalCarts.find(animel => animel.id === id)?.quantity || 0
  }

  function increaseAnimelCartQuantity(id) { //id = 1
    setAnimalCarts(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id: id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
}

  function decreaseAnimelCartQuantity(id) { //id = 1
    setAnimalCarts(currItems => {
      if (currItems.find(item => item.id === id)?.quantity == 1) {
        return currItems.filter(anemal=>anemal.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeAnimelFromCarts(id){
    setAnimalCarts(currentAnimal=>{
        return currentAnimal.filter((item)=>item.id!==id);
    })
  }

 
    const totalOrder = animalCarts.reduce((total,animelCart)=>{ return total + animelCart.quantity } , 0 )
  
    const totolPrice = animalCarts.reduce((total,animelCart) => { 
      const animel = animal.find(animell => animell.id === animelCart.id)
      return total + animel.price * animelCart.quantity
    },0)

    return (
        <AnimelContext.Provider value={{ animal, animalCarts, totolPrice, totalOrder,getQuantityByID , increaseAnimelCartQuantity, decreaseAnimelCartQuantity, removeAnimelFromCarts }}>
            {children}
        </AnimelContext.Provider>
    )

}