import React from 'react'

export default function HomeSectionCard() {
  return (
    <div className='bg-[#1E2030] px-4 py-4 ml-5  rounded min-w-[340px] md:w-[500px] md:h-[350px] min-h-[200px] z-50 cursor-pointer'>

        <div className='flex items-center gap-2'>
            <img src="https://picsum.photos/200/300" alt="" className='object-cover h-[60px] w-[60px] rounded'/>
            <p className='text-xl font-bold text-white'>Cafe citizen</p>
        </div>
        <div className='flex items-center gap-2 mt-6'>

            <div className='bg-[#282A3A] w-full py-5 rounded' >
                <p className='text-white text-sm'>Creator</p>
                <p className='text-white text-sm'>0x1234567890</p>
            </div>

            <div className='bg-[#282A3A] w-full py-5 rounded' >
                <p className='text-white text-sm'>Total Minted</p>
                <p className='text-white text-sm'>898</p>
            </div>

        </div>

        <div className='flex items-center gap-3 mt-4'>

            <img src="https://picsum.photos/200/300" alt="" className='md:h-32 md:w-32 h-[100px] w-[100px]  rounded-md object-cover' />
            <img src="https://picsum.photos/400/300" alt="" className='md:h-32 md:w-32 h-[100px] w-[100px]  rounded-md object-cover' />
            <img src="https://picsum.photos/600/300" alt="" className='md:h-32 md:w-32 h-[100px] w-[100px]  rounded-md object-cover' />


        </div>

    </div>
  )
}
