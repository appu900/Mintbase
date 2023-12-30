import React from 'react'

const DeveloperdocsCard = () => {
  return (
    <div className='bg-[#1E2030]  ml-5 rounded md:min-w-[500px] md:h-[370px] h-[350px] min-w-[340px]'>
      
      <div className='w-full md:h-[120px]'>
        <img className='rounded-t' src="https://image-cache-service-z3w7d7dnea-ew.a.run.app/thumbnail?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fomni-base-1.appspot.com%2Fo%2Fexample-cards%252FMarketplace%2520for%25203D-Printed%2520Products%253Aimage%3Falt%3Dmedia%26token%3D31941ad5-56e1-4acb-a8d2-354d04d5765e" alt="" />
      </div>

      <div className='px-6  md:py-3 md:mt-24 mt-10  '>

        <p className='text-xl font-bold'>Marketplace for 3D-Printed Products</p>
        <p className='mt-3 tracking-wide text-gray-300'>Blockchain based marketplace for products that can be printed wherever you are</p>

      </div>

    </div>
  )
}

export default DeveloperdocsCard