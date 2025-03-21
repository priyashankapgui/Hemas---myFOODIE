import React from 'react'
import { Card as ShadcnCard } from '@/components/ui/card';
import Image from 'next/image';


const SingleFoodCard = () => {
  return (
    <>
      <ShadcnCard>
        {/* Image Section */}
        <div className="relative h-60 w-60 mx-auto rounded-full overflow-hidden">
          <Image
            src="/food1.jpg"
            alt="food"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 text-theme_green-870 text-center flex-grow">
          <h3 className="text-2xl font-bold">Food Name</h3>
          <p className="text-xl">LKR 1000</p>
        </div>

        {/* Button Section */}
        <div className="mt-auto p-4 ">
          <button className="w-full text-lg font-semibold text-right bg-none py-2 pr-2 rounded-lg hover:text-theme_green-500 transition-colors">
            View
          </button>
        </div>


      </ShadcnCard>
    </>
  )
}

export default SingleFoodCard
