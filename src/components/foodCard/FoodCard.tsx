import React from 'react';
import { Card as ShadcnCard } from '@/components/ui/card';
import Image from 'next/image';

interface FoodCardProps {
  foodName: string;
  foodPrice: string;
  foodImgURL: string;
  className?: string;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  foodName,
  foodPrice,
  foodImgURL,
  className,
}) => {
  return (
    <ShadcnCard className={`overflow-hidden rounded-xl shadow-[0_4px_8px_-16px_rgba(0,0,0,0.1)] bg-gradient-to-t w-2/6 from-theme_green-150 to-none transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col ${className}`}>
      {/* Image Section */}
      <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden">
        <Image
          src={foodImgURL}
          alt={foodName}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 text-theme_green-870 text-center flex-grow">
        <h3 className="text-2xl font-bold">{foodName}</h3>
        <p className="text-xl">LKR {foodPrice}</p>
      </div>

      {/* Button Section */}
      <div className="mt-auto p-4 ">
        <button className="w-full text-lg font-semibold text-right bg-none py-2 pr-2 rounded-lg hover:text-theme_green-500 transition-colors">
          View
        </button>
      </div>
    </ShadcnCard>
  );
};