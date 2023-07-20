import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import FoodPageDisplay from "./FoodPageDisplay";
import { Link } from "react-router-dom";

const FoodPage = () => {
  const darkValue = useSelector((state)=>state.dark.isDark);
  const foods = useSelector((state) => state.count.foods);
  const { id } = useParams();
  const food = foods.find((food) => food.id.toString() === id);
  const f = Array(food);
  console.log();
  return (
    <div className="max-w-6xl mx-auto">
      {food && (
        <>
          {f.map((food) => {
            return <FoodPageDisplay key={food.id} {...food} />;
          })}
        </>
      )}
      {!food &&
       <>
        <div className="h-screen">
          <h1 className="text-center font-bold text-red-600 text-3xl mt-48 font-serif"> Page Not Found</h1>
          <p className="text-center mt-2 font-bold flex flex-col">
            Click The Button Below For Back To Home
            <Link to='/' className={darkValue ? "bg-orange-500 px-4 py-1  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-white duration-500 max-w-max mx-auto mt-4 " : " max-w-max mx-auto mt-4 bg-orange-500 px-4 py-1  rounded-md  border-2 border-orange-500 text-white hover:bg-transparent hover:text-black duration-500 "}> Home </Link>
          </p>
        </div>
       </>
       }
    </div>
  );
};

export default FoodPage;
