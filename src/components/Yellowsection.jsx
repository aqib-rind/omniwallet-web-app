import React from 'react'

export default function Yellowsection() {
  return (
<div className='md:flex bg-[#F2B203] p-5 max-w-6xl justify-center items-center  mx-auto my-12'>
  <div className='w-[50%]'>
    <img className='w-full' src="omniwallet/images/image-33.png" alt="" />
    </div>
  <div className='w-[50%]'>
    <div className='flex flex-col gap-3 items-center text-center justify-center max-w-sm m-auto'>
    <h2 className='font-semibold text-3xl'>Help Maui & others around the world</h2>
    <p>The Tripadvisor Foundation is matching donations to World Central Kitchen’s Climate Disaster Fund. Your support helps disaster responses not only in Maui, but worldwide.
</p>
<a href="#" className='bg-black py-3 px-6 rounded-full text-white font-semibold text-sm'> Donate now</a>
</div>
  </div>
</div>
  )
}
