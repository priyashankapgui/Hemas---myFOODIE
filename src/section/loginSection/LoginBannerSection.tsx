"use client";
import React, { useState } from "react";
import Image from 'next/image';

const LoginBannerSection = () => {

  const [play, setPlay] = useState(true);

  return (
    <>
      <div className='  h-full w-5/6 flex flex-col mt-7 items-center justify-center rounded-lg bg-gradient-to-b  from-theme_green-500 to-theme_green-975'>
        <div className=' text-left text-white w-4/5'>
          <p className='text-5xl font-regular tracking-wider'>Discover the Taste <br /> of Happiness</p>
          <p className='mt-8 mb-5 text-lg font-thin italic tracking-wider '>Welcome to myFOODIE Let&apos;s create your<br /> account and enjoy a seamless dining<br /> experience.</p>

        </div>
        {play ? (
          <video className="w-4/5 h-auto rounded-lg" autoPlay loop muted >
            <source src="/video/loginPageVideo.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="relative cursor-pointer w-4/5 h-auto" onClick={() => setPlay(true)}>
            <Image
              src="/images/loginPageBanner.png"
              width={800}
              height={450}
              alt="Video Thumbnail"
              className=" ml-8 w-4/5 h-auto rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white text-3xl">▶</span>
            </div>
          </div>
        )}


      </div>
    </>
  )
}

export default LoginBannerSection
