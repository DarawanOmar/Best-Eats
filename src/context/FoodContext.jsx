import { createContext, useContext } from "react";
import {faker} from '@faker-js/faker'; // Adjusted import for faker

const FoodContext = createContext({})

export const useFoodContext = () => {
    return useContext(FoodContext)
}

export const FoodContextProvider = ({ children }) => {
    const foods = Array(10).fill().map(() => ({
        id: faker.number.int(),
        username: faker.internet.userName(),
        price: faker.commerce.price(),
        image: faker.image.url(),

    }));
    console.log(foods);
    return (
        <FoodContext.Provider value={{ foods }}>
            {children}
        </FoodContext.Provider>
    )
}
