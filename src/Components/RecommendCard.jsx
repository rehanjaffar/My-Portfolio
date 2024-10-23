import { RiStarFill } from '@remixicon/react'
import React from 'react'

export default function RecommendCard({ pitems, bg }) {
   let bgchng;
    if (bg === false) {
        bgchng = "bgchng"
    }
    
  return (
    <div className={ `${bgchng} bg-white w-[290px] p-3 rounded-3xl`}>
          <div className='flex text-red-400'>
              <RiStarFill/>
              <RiStarFill/>
              <RiStarFill/>
              <RiStarFill/>
              <RiStarFill/>
          </div>
          <h1 className='text-[28px] font-medium pt-1 px-4 '>{ pitems.fedback}</h1>
          <p className='p-3'>{ pitems.description}</p>
          <div className='flex m-3 '>
              <img src="/src/assets/profile.jpeg" width='100px' className='rounded-[50%]' alt="" />
              <div className='flex flex-col justify-center'>
              <h2 className='text-[20px] font-semibold px-3'>{pitems.name}</h2>
                  <p className='px-3 leading-[6px]'>Dancer</p>
                  </div>
          </div>
    </div>
  )
}
