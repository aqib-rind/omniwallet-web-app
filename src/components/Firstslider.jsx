import React from 'react'

export default function Firstslider() {
  return (
<div className='flex flex-col gap-2 max-w-6xl m-auto pb-16'>
  <h3 className='font-semibold text-2xl'>Top Things to Do by category</h3>
  <p className='text-sm pb-3'>Travelers' Choice Best of the Best winners</p>

  <div className='flex justify-between gap-5'>
    <div className='relative w-full h-[270px] flex items-end'>
      <img className='absolute top-0 w-full z-[-1]' src="omniwallet/images/image-34.png" alt="" />
      <h4 className='font-bold text-2xl z-10 w-full p-3 text-white'>Top Overall</h4>
    </div>
    <div className='relative w-full h-[270px] flex items-end'>
      <img className='absolute top-0 w-full z-[-1]' src="omniwallet/images/image-34.png" alt="" />
      <h4 className='font-bold text-2xl z-10 w-full p-3 text-white'>Top Overall</h4>
    </div>
    <div className='relative w-full h-[270px] flex items-end'>
      <img className='absolute top-0 w-full z-[-1]' src="omniwallet/images/image-34.png" alt="" />
      <h4 className='font-bold text-2xl z-10 w-full p-3 text-white'>Top Overall</h4>
    </div>
    <div className='relative w-full h-[270px] flex items-end'>
      <img className='absolute top-0 w-full z-[-1]' src="omniwallet/images/image-34.png" alt="" />
      <h4 className='font-bold text-2xl z-10 w-full p-3 text-white'>Top Overall</h4>
    </div>
  </div>
</div>
  )
}
