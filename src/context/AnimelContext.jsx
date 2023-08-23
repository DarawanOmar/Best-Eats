import { createContext, useContext, useState} from "react";
import {faker} from '@faker-js/faker'; // Adjusted import for faker

const AnimelContext = createContext({})

export const useAnimelContext = () => {
    return useContext(AnimelContext)
}

export const AnimelContextProvider = ({ children }) => {

  const foods = [
    {
      "id": 1,
      "name": "Chese burger",
      "category": "burger",
      "image":
        "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      "price": 10  ,
      "discription" : "A cheeseburger is a hamburger with a slice of melted cheese on top of the meat patty, added near the end of the cooking time."
    },
    {
      "id": 2,
      "name": " Melt burger",
      "category": "burger",
      "image":
        "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
      "price":3  ,
      "discription" : "A patty melt is a sandwich consisting of a ground beef patty with melted cheese (traditionally Swiss Cheese) and topped with caramelized onions between two slices of griddled bread"
    },
    {
      "id": 3,
      "name": "MushroBurger",
      "category": "burger",
      "image":
        "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
        "price":5  ,
        "discription" : "Chop mushrooms into small chunks, then transfer to a large bowl. Mix in bread crumbs and oats, and season with salt and pepper as needed. Stir in Parmigiano-Reggiano cheese, then eggs; let stand until bread crumbs have absorbed any excess liquid, about 15 minutes"
    },
    {
      "id": 4,
      "name": "Load Burger",
      "category": "burger",
      "image":
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
        "price":8  ,
        "discription" : "Loaded burgers are burgers loaded with toppings and even fillings! In the case of my loaded burger recipe, the patty is mixed with Parmesan and then topped with caramelized onions, bacon, avocado crema, and typical burger fixings like lettuce and tomato"
    },
    {
      "id": 5,
      "name": "Feta_Spinnach",
      "category": "pizza",
      "image":
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "price":5  ,
        "discription" : "Add ground chicken to large bowl. Mix in drained spinach, whole cracked egg, crumbled feta, minced garlic, diced onion and dried oregano. Mix well using clean hands. Form into six equal size patties (about ½ cup – 125 mL each)"
    },
    {
      "id": 6,
      "name": "Supre Pizza",
      "category": "pizza",
      "image":
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "price":8  ,
        "discription" : "From the popular pizza chain of Pizza Hut, it is a pizza made with classic marinara sauce, pepperoni, seasoned pork, beef, fresh mushrooms, fresh green bell peppers, and fresh red onions. A supreme pizza is available at most pizzerias with many variations of toppings. Some even use Canadian bacon and black olives"
    },
    {
      "id": 7,
      "name": "Meat Lovers",
      "category": "pizza",
      "image":
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "price": 10  ,
        "discription" : " Meat Lovers. Smoky bacon, tender ham, spicy pepperoni, and well-seasoned Italian sausage crumbles are spread out onto a fluffy crust coated in sweet marinara and freshly shredded mozzarella cheese in this deliciously classic recipe"
    },
    {
      "id": 8,
      "name": "Cheese Pizza",
      "category": "pizza",
      "image":
        "https://images.unsplash.com/photo-1548369937-47519962c11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "price":3  ,
        "discription" : "A combo of mozzarella and provolone offers both stretch and flavor; in fact, many pizzerias use just this blend. If stretch isn't important but you still favor an ooey-gooey melted cheese experience, any of the other tested cheeses should suit you just fine. Cheddar, fontina, Muenster, Gouda, etc"
    },
    {
      "id": 9,
      "name": "Kale Salad",
      "category": "salad",
      "image":
        "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "price":5  ,
        "discription" : "It is made with fresh, hearty kale, Parmesan cheese, toasted almonds, dried cranberries, and a fresh lemon balsamic dressing. Enjoy for lunch or serve along side any meal. Kale salad. Those two words may not be that exciting to you, but please give this kale salad a chance."
    },
    {
      "id": 10,
      "name": "Ceasar Salad",
      "category": "salad",
      "image":
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "price":8  ,
        "discription" : "Caesar salad (also spelled Cesar, César and Cesare) is a green salad of romaine lettuce and croutons dressed with lemon juice (or lime juice), olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper. In its original form, this salad was prepared and served tableside"
    },
    {
      "id": 11,
      "name": "Loaded Salad",
      "category": "salad",
      "image":
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "price": 10  ,
        "discription" : "Most leafy vegetables that can be eaten raw are used: all varieties of lettuce, garden cress and watercress, endives, cabbage, spinach, escarole, romaine (cos), arugula, and fresh herbs. Other vegetables, raw or cooked—tomatoes, onions, cucumbers, peppers, beets, and so on—may garnish the green salad"
    },
    {
      "id": 12,
      "name": "Fruit Salad",
      "category": "salad",
      "image":
        "https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "price":3  ,
        "discription" : "Common ingredients used in fruit salads include strawberries, pineapple, honeydew, watermelon, grapes, and kiwifruit. Various recipes may call for the addition of nuts, fruit juices, certain vegetables, yogurt, or other ingredients"
    },
    {
      "id": 13,
      "name": "Wings",
      "category": "chicken",
      "image":        
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      "price":5  ,
      "discription" : "Most people do attribute the invention to Teressa Bellissimo of Buffalo, New York. In fact, this may be where the name 'Buffalo Wing' came from. There are two tales of how she came to create the chicken wing. First, it is said that due to a mistake in delivery."
    },
    {
      "id": 14,
      "name": "Bake chicken",
      "category": "chicken",
      "image":
        "https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "price": 10  ,
        "discription" : "A 3.5-oz. (100-g) serving of chicken breast provides 165 calories, 31 g of protein, and 3.6 g of fat ( 1 ). That means that approximately 80% of the calories in chicken breast come from protein and 20% come from fat. Keep in mind that these amounts refer to a plain chicken breast with no added ingredients"
    },
    {
      "id": 15,
      "name": "chickenTenders",
      "category": "chicken",
      "image":
        "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "price":3  ,
        "discription" : "Chicken tenders or chicken tenderloins are actually parts of a chicken. They are the little strips of meat that are tenuously attached to the underside of each breast (and thus sometimes called “hanging tenders”), so every chicken has two tenders."
    },
    {
      "id": 16,
      "name": "chicken Kabob",
      "category": "chicken",
      "image":
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "price":8  ,
      "discription" : "The chicken is marinated in yogurt, olive oil, lemon, garlic and spices, and then grilled over an open flame until juicy and golden brown. The only time-consuming part of the recipe is threading the meat and onions onto skewers"
    },
    {
      "id": 17,
      "name": "Bryany",
      "category": "chicken",
      "image":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaUOD4NMVfMGdg1SEzovaEXydk9WSSZNJ1Vg&usqp=CAU",
      "price": 12  ,
      "discription" : "Any type of biryani consists of four main components: rice, meat, marinade, and spices. When it comes to making biryani rice, basmati rice is typically the go-to option; however, some cooks prefer to use other grains, such as jeerakasala or seeraga samba"
    },
    {
      "id": 18,
      "name": "Kfta",
      "category": "pizza",
      "image":
        "https://img.freepik.com/free-photo/top-view-cooked-vegetables-such-as-red-tomatoes-green-bell-pepper-black-eggplants-potatoes-inside-plate-plate_140725-14289.jpg?size=626&ext=jpg&ga=GA1.2.656506428.1687210625&semt=ais",
      "price" : 12  ,
      "discription" : "Koftas can be loosely described as meatballs, and they are often made with lamb or beef or chicken meat in India. However, vegetarian versions like malai kofta, made with paneer, a fresh Indian cheese, and khoya, a reduction of milk, are just as -- or perhaps more -- popular. Koftas are not a concept native to India"
    },
    {
      "id": 19,
      "name": "Kwba",
      "category": "burger",
      "image":
        "https://img.freepik.com/free-photo/top-view-vegan-goodies-wooden-board_23-2148305801.jpg?size=626&ext=jpg&ga=GA1.2.656506428.1687210625&semt=ais",
        "price": 12  ,
        "discription" : "Kibbeh ( also kubba and other spellings; Arabic: كبة, romanized: kibba), Koupes in Cyprus, is a family of dishes based on spiced ground meat, onions, and grain, popular in many countries of West Asia"
    },
    {
      "id": 20,
      "name": "Shfta",
      "category": "chicken",
      "image":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMtisYa_wAefZFOAcU0XlHy_2-yrf8EF1NyyPG7_HgJfjBvTHhFIw3Xhe_q3vZg65raE&usqp=CAU",
        "price": 12  ,
        "discription" : "Kurdish meatballs are typically served with an assortment of dishes like rice, hummus, grape leaves, and more Make this recipe using salt and pepper from our shop!"
    }
  ]
  const categories = [
    {
      "id": 1,
      "name": "Fast Food",
      "image":
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png"
    },
    {
      "id": 2,
      "name": "Pizza",
      "image":
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png"
    },
    {
      "id": 3,
      "name": "Wings",
      "image":
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png"
    },
    {
      "id": 4,
      "name": "Indian",
      "image":
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png"
    },
    {
      "id": 5,
      "name": "Latest Deals",
      "image":
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png"
    },
    {
      "id": 6,
      "name": "Restaurant Rewards",
      "image":
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png"
    },
    {
      "id": 7,
      "name": "Best Overall",
      "image":
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/TopEats_Browse%20Home@3x.png"
    },
    {
      "id": 8,
      "name": "Shipped Free",
      "image":
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png"
    }
  ]
    faker.seed(99)
    const animal = Array(20).fill().map(() => ({
      id: faker.number.int(),
      username: faker.internet.userName(),
      price: faker.number.int({ min: 30, max: 50 }),
      image: faker.image.urlLoremFlickr({ category: 'animals' }),
      discription: faker.lorem.paragraph(),
      category: faker.animal.type()
  
  }));
  //   const fooods = Array(20).fill().map(() => ({
  //     id: faker.number.int(),
  //     username: faker.internet.userName(),
  //     price: faker.commerce.price(),
  //     image: faker.image.urlLoremFlickr({ category: 'city' }),
  //     discription: faker.lorem.lines(),
  //     category: faker.location.country()
  
  // }));
  const[animalCarts,setAnimalCarts] = useState([])
  const[foodCarts,setFoodCarts] = useState([])
  const[rateFoodAndAnimals,setRateFoodAndAnimals] = useState([])

  const getQuantityByID = (id) => {
    return animalCarts.find(animel => animel.id === id)?.quantity || 0
  }
  const getQuantityFoodByID = (id) => {
    return foodCarts.find(food => food.id === id)?.quantity || 0
  }

  function increaseAnimelCartQuantity(id) { //id = 1
    setAnimalCarts(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id: id, quantity: 1, favoraite: false }]
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
  function increaseFoodCartQuantity(id) { //id = 1
    setFoodCarts(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id: id, quantity: 1, favoraite: false }]
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
  function addRateFoodAndAnimals(id,numbr) { //id = 1
    setRateFoodAndAnimals(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id: id, rateNumber:numbr }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, rateNumber:numbr }
          } else {
            return item
          }
        })
      }
    })
}

  function decreaseAnimelCartQuantity(id) { //id = 1
    setAnimalCarts(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
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
  function decreaseFoodCartQuantity(id) { //id = 1
    setFoodCarts(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
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
  function removeFoodFromCarts(id){
    setFoodCarts(currentAnimal=>{
        return currentAnimal.filter((item)=>item.id!==id);
    })
  }

  function addToFavoraite(id){
    setAnimalCarts(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id:id, quantity: null , favoraite: true }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, favoraite:!item.favoraite }
          } else {
            return item
          }
        })
      }
    })
  }
  
  function addToFavoraiteFood(id){
    setFoodCarts(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id:id, quantity: null , favoraite: true }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, favoraite:!item.favoraite }
          } else {
            return item
          }
        })
      }
    })
  }

 
    const totalOrder = animalCarts.reduce((total,animelCart)=>{ return total + animelCart.quantity } , 0 )
    const totolPrice = animalCarts.reduce((total,animelCart) => { 
      const animel = animal.find(animell => animell.id === animelCart.id)
      return total + animel.price * animelCart.quantity
    },0)

    const totalOrderFood = foodCarts.reduce((total,foodCart)=>{ return total + foodCart.quantity } , 0 )
    const totolPriceFood = foodCarts.reduce((total,foodCart) => { 
      const food = foods.find(foodl => foodl.id === foodCart.id)
      return total + food.price * foodCart.quantity
    },0)

    return (
        <AnimelContext.Provider value={{ 
          foods,
          animal, 
          categories,
          animalCarts, 
          foodCarts,
          totolPrice, 
          totalOrder,
          totalOrderFood,
          totolPriceFood,
          rateFoodAndAnimals,
          setAnimalCarts,
          setFoodCarts,
          getQuantityFoodByID,
          getQuantityByID , 
          increaseFoodCartQuantity,
          increaseAnimelCartQuantity, 
          decreaseFoodCartQuantity,
          decreaseAnimelCartQuantity, 
          removeAnimelFromCarts,
          removeFoodFromCarts,
          addToFavoraite ,
          addToFavoraiteFood,
          addRateFoodAndAnimals
          }}>
            {children}
        </AnimelContext.Provider>
    )

}