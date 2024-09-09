import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import leaf from '../../assets/png/leaf.png'
import tomato from '../../assets/png/tomato.png'
import lemon from '../../assets/png/lemon.png'
import apple from '../../assets/png/apple.png'
import kiwi from '../../assets/png/kiwi.png'


function Banner() {
  console.log("Banner is running 1 st time")
  return (
    <div className='relative bg-gray-100 py-14'>
      <h1  data-aos="fade-up"
         data-aos-delay="100" className="py-8 text-2xl font-semibold tracking-wider text-center text-dark">
        Taste The Real Difference
      </h1>
      <div className='space-y-10'>
        <div               data-aos="fade-up"
             data-aos-delay="200" className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2">
          <div>
            <p >
            Discover a culinary journey like no other with our diverse menu, crafted to satisfy every craving. From farm-fresh ingredients to gourmet creations, we bring the finest flavors right to your table. Enjoy fast, reliable delivery with every order, ensuring your food arrives hot and delicious. Experience exceptional service and quality with every bite, all from the comfort of your home.
            </p>
          </div>
          {/* This empty div can be removed if you don't need it */}
          <div></div>
        </div>
        <div   data-aos="fade-up"
             data-aos-delay="200" className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2">
        <div></div>
          <div>
            <p>
            Indulge in a feast of flavors with our expertly curated dishes designed to delight your taste buds. Whether you're in the mood for a classic comfort meal or a daring new taste sensation, our extensive menu has something for everyone. Our commitment to freshness and quality guarantees that every meal is a moment of culinary joy. Order now and savor the perfect blend of convenience and gourmet excellence
            </p>
          </div>
         
        </div>
        
      </div>
      <div               data-aos="fade-up"
             data-aos-delay="200" className='flex justify-center mt-10 lg:ml-96 lg:pr-80 sm:mt-14 '>
          <PrimaryButton />
          </div>
      {/* bgimg */}
      <div               data-aos="fade-right"
             data-aos-delay="200" className='absolute top-5 -left-16 sm:bottom-0 sm:left-0 sm:opacity-100'>
        <img src={leaf} alt="" className='max-w-[160px]' />
      </div>
      <div               data-aos="fade-right"
             data-aos-delay="200" className='absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 sm:opacity-100'>
        <img src={tomato} alt="" className='max-w-[200px]' />
      </div>
      <div               data-aos="fade-left"
             data-aos-delay="200" className='absolute top-10 -right-16 sm:right-20 sm:opacity-100'>
        <img src={lemon} alt="" className='max-w-[200px]' />
      </div>
      <div               data-aos="fade-left"
             data-aos-delay="200" className='absolute bottom-0 right-0 hidden sm:block'>
        <img src={apple} alt="" className='max-w-[200px]' />
      </div>
      <div               data-aos="fade"
             data-aos-delay="200" className='absolute hidden -translate-x-1/2 translate-y-1/2  top-1/3 left-[42%] sm:opacity-100 sm:block'>
        <img src={kiwi} alt="" className='max-w-[180px]' />
      </div>
    </div>
  );
}

export default Banner;
