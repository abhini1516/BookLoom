import React from 'react';
import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
      <div className='md:w-1/2 w -full flex items-center md:justify-end'>
        <img src ={bannerImg} alt=""/>
      </div>


      <div className='md:w-1/2 w-full'>
        <h1 className='md:text-5xl text-2xl font-medium mb-7'>Spot Highlights Of The Week</h1>
        <p className='mb-10'>
          Dive into the most talked-about stories of the week! Whether it's a groundbreaking bestseller, <br /> a hidden literary gem, or an author making waves, we’ve got the top picks you won’t want to miss.
        </p>
        <button className='btn-primary'>Subscribe</button>
      </div>
      
    </div>
  );
};

export default Banner;
