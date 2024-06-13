import React from 'react'
import Tesimonailslider from './Tesimonailslider'

export default function Purplebg() {
  return (
<div className='bg-transparent relative pt-28 -mt-80 z-10'>
<img className='w-full' src="omniwallet/images/topbgshape.svg" alt="" />
<div className='bg-secondary'>
  <div className='flex items-center justify-center max-w-[73.5%] m-auto z-10'>
    <div>
      <img src="omniwallet/images/girl.png" alt="" />
    </div>
    <div className='pl-16'>
      <div className='flex items-center justify-start gap-7 pb-4'>
        <img src="omniwallet/images/check-bullet.svg" alt="" />
        <h3 className='font-bold text-2xl text-white'>Effortless Money Transfer</h3>
      </div>
      <div className='flex items-center justify-start gap-7 pb-4'>
        <img src="omniwallet/images/check-bullet.svg" alt="" />
        <h3 className='font-bold text-2xl text-white'>Plan Your Dream Trip</h3>
      </div>
      <div className='flex items-center justify-start gap-7 pb-4'>
        <img src="omniwallet/images/check-bullet.svg" alt="" />
        <h3 className='font-bold text-2xl text-white'>Hassle-Free Hotel Booking</h3>
      </div>
      <div className='flex items-center justify-start gap-7 pb-4'>
        <img src="omniwallet/images/check-bullet.svg" alt="" />
        <h3 className='font-bold text-2xl text-white'>Car Rental Made Easy</h3>
      </div>
      <div className='flex items-center justify-start gap-7 pb-4'>
        <img src="omniwallet/images/check-bullet.svg" alt="" />
        <h3 className='font-bold text-2xl text-white'>Currency Converter</h3>
      </div>
      <div className='flex items-center jjustify-start gap-7 pb-4'>
        <img src="omniwallet/images/check-bullet.svg" alt="" />
        <h3 className='font-bold text-2xl text-white'>Virtual Card Management</h3>
      </div>
      <div className='flex items-center justify-start gap-7'>
        <img src="omniwallet/images/check-bullet.svg" alt="" />
        <h3 className='font-bold text-2xl text-white'>Things To Do</h3>
      </div>
    </div>
  </div>

<div className='bg-[#45197D] max-w-6xl m-auto p-20 rounded-3xl'>
    <h2 className='font-bold text-white text-5xl text-center'>Sign Up Now or Download Omni</h2>
    <div className='flex gap-10 items-start justify-center pt-10'>
    <div>
      <img className='w-full' src="omniwallet/images/app-store.png" alt="" />
    </div>
    <div>
      <img className='w-full' src="omniwallet/images/google-play.png" alt="" />
    </div>
    </div>
</div>

<Tesimonailslider/>
</div>
</div>
  )
}
