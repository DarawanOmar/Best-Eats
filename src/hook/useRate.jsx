import { useState } from "react";

export  const useRateBurger = () => {

    const[rateBurger,setRateBurger] = useState(0)
        const handleRate = () => {
            setRateBurger(1);
        }
        const handleRate2 = () => {
            setRateBurger(2);
        }
        const handleRate3 = () => {
            setRateBurger(3);
        }
        const handleRate4 = () => {
            setRateBurger(4);
        }
        const handleRate5 = () => {
            setRateBurger(5);
        }
    return {rateBurger ,handleRate , handleRate2 , handleRate3 , handleRate4 , handleRate5}
}



export  const useRatePizza = () => {

    const[ratePizza,setRatePizza] = useState(0)
        const handleRatePizza = () => {
            setRatePizza(1);
        }
        const handleRatePizza2 = () => {
            setRatePizza(2);
        }
        const handleRatePizza3 = () => {
            setRatePizza(3);
        }
        const handleRatePizza4 = () => {
            setRatePizza(4);
        }
        const handleRatePizza5 = () => {
            setRatePizza(5);
        }
    return {ratePizza ,handleRatePizza , handleRatePizza2 , handleRatePizza3 , handleRatePizza4 , handleRatePizza5}
}
export  const useRateSalad = () => {

    const[rateSalad,setRateSalad] = useState(0)
        const handleRateSalad = () => {
            setRateSalad(1);
        }
        const handleRateSalad2 = () => {
            setRateSalad(2);
        }
        const handleRateSalad3 = () => {
            setRateSalad(3);
        }
        const handleRateSalad4 = () => {
            setRateSalad(4);
        }
        const handleRateSalad5 = () => {
            setRateSalad(5);
        }
    return {rateSalad ,handleRateSalad , handleRateSalad2 , handleRateSalad3 , handleRateSalad4 , handleRateSalad5}
}
export  const useRateChicken = () => {

    const[rateChicken,setRateChicken] = useState(0)
        const handleRateChicken = () => {
            setRateChicken(1);
        }
        const handleRateChicken2 = () => {
            setRateChicken(2);
        }
        const handleRateChicken3 = () => {
            setRateChicken(3);
        }
        const handleRateChicken4 = () => {
            setRateChicken(4);
        }
        const handleRateChicken5 = () => {
            setRateChicken(5);
        }
    return {rateChicken ,handleRateChicken , handleRateChicken2 , handleRateChicken3 , handleRateChicken4 , handleRateChicken5}
}

