import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Card from './home/card';
import CarouselComponent from './home/carousel';
import cardData from '../data/cardData.json';

export default function Home() {
  const [categories, setCategories] = useState(new Set());
  const [typeFilter, setTypeFilter] = useState("All");
  const [foodData, setFoodData] = useState([]);
  const [categoryArray, setCategoryArray] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    const handleData = () => {
      const uniqueCategories = new Set();
      cardData.forEach((data) => {
        uniqueCategories.add(data.category);
      });
      setCategories(uniqueCategories);
      setFoodData(cardData);
    };

    handleData();
  }, []);

  useEffect(() => {
    setCategoryArray([...categories]);
  }, [categories]);

  const filterFoodData = (data) => {
    if (typeFilter === "All") return true;
    if (typeFilter === "Veg") {
      return data.foodType === typeFilter && data.name !== "Chicken Parcel";
    }
    if (typeFilter === "Non-Veg") {
      return data.foodType === typeFilter || (data.category === "Sides & Beverages" && data.name === "Chicken Parcel");
    }
    return false;
  };

  return (
    <>
      <CarouselComponent />
      <div className="container mx-auto">
        <div className="flex justify-center mb-4 mt-10" style={{ marginBottom: '1rem' }}>
          <button onClick={() => setTypeFilter("All")} className={`px-4 py-2 mx-2 rounded-md shadow-md transition duration-300 ${typeFilter === "All" ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-black hover:bg-gray-300'}`}>
            All
          </button>
          <button onClick={() => setTypeFilter("Veg")} className={`px-4 py-2 mx-2 rounded-md shadow-md transition duration-300 ${typeFilter === "Veg" ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-200 text-black hover:bg-gray-300'}`}>
            Veg
          </button>
          <button onClick={() => setTypeFilter("Non-Veg")} className={`px-4 py-2 mx-2 rounded-md shadow-md transition duration-300 ${typeFilter === "Non-Veg" ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-200 text-black hover:bg-gray-300'}`}>
            Non-Veg
          </button>
        </div>
        {categoryArray.map((category) => (
          <div key={category}>
            <div className={`text-4xl mt-10 mb-3 uppercase font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              {category}
            </div>
            <hr className={` ${theme === 'dark' ? 'text-white border-white' : 'text-black border-black'}`} />
            <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {foodData
                .filter((food) => food.category === category && filterFoodData(food))
                .map((data) => (
                  <Card key={data.name} foodData={data} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
