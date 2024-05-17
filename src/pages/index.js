import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'; // Importing useTheme hook
import Card from './home/card';
import CarouselComponent from './home/carousel';
import cardData from '../data/cardData.json';

export default function Home() {
  const [categories, setCategories] = useState(new Set());
  const [foodData, setFoodData] = useState([]);
  const [categoryArray, setCategoryArray] = useState([]);
  const { theme } = useTheme(); // Getting the current theme

  useEffect(() => {
    const handleData = () => {
      cardData.forEach((data) => {
        setCategories((prevCategories) => new Set(prevCategories.add(data.category)));
        setFoodData((prevFoodData) => [...prevFoodData, data]);
      });
    };

    handleData();
  }, []); // Empty dependency array because handleData doesn't rely on any external variables

  useEffect(() => {
    setCategoryArray([...categories]);
  }, [categories]); // Update categoryArray whenever categories change

  return (
    <>
      <CarouselComponent />
      <div className="container mx-auto">
        {categoryArray.map((category) => (
          <div key={category}>
            <div className={`text-4xl mt-10 mb-3 uppercase font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}> {/* Adjusting text color based on theme */}
              {category}
            </div>
            <hr className={` ${theme === 'dark' ? 'text-white border-white' : 'text-black border-black'} dark:  `}/>
            <div className="grid mx auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {foodData.filter((foodData) => category === foodData.category).map((data) => (
                <Card key={data.name} foodData={data} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
