'use client';
import { FoodCard } from '@/components/foodCard/FoodCard';
import React from 'react';
import data from '@/data/data.json';

const FoodCardSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3  p-4 m-16">
      {data.map((food, index) => (
        <FoodCard
          key={index}
          foodName={food.foodName}
          foodPrice={food.foodPrice}
          foodImgURL={food.foodImgURL}
          className="w-72 my-4"
        />
      ))}
    </div>
  );
};

export default FoodCardSection;