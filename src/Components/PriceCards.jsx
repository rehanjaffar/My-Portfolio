import { RiCheckLine, RiCrossFill } from '@remixicon/react'
import React from 'react'

export default function PriceCards({pitems}) {
  return (
      <div className='bg-white flex flex-col justify-center items-center lg:w-[350px] rounded-3xl relative'>
        {pitems.popular === 0 ? <div className='absolute top-0 bg-red-400 w-full text-center'>
              <h1 className='text-white'>Most Popular</h1>
          </div> : false}  
          <h2 className='text-[28px] text-center font-semibold pt-5'>{ pitems.title}</h2>
          <p className='text-center pb-3'><span className='text-[32px] md:text-[52px] font-bold '>{ pitems.price}</span> /Hour</p>
          <p className='p-5 text-[16px] text-center'>For Most Budiness That Want To Optimize Web Queries</p>
          <ul className='list-none pl-5 self-baseline'>
          <li className='pb-4 flex gap-1'>  <RiCheckLine/> UI Design </li>
          <li className='pb-4 flex gap-1'><RiCheckLine/> Web Development</li>
          <li className='pb-4 flex gap-1'><img src="/src/assets/cross-23.png" width='24px' alt="" /> Logo Design</li>
          <li className='pb-4 flex gap-1'><img src="/src/assets/cross-23.png" width='24px' alt="" />Seo Optimization</li>
          <li className='pb-4 flex gap-1'><img src="/src/assets/cross-23.png" width='24px' alt="" />WordPress Integration</li>
          <li className='pb-4 flex gap-1'><img src="/src/assets/cross-23.png" width='24px' alt="" />5 Websites</li>
          <li className='pb-4 flex gap-1'><img src="/src/assets/cross-23.png" width='24px' alt="" />Unlimited User</li>
          <li className='pb-4 flex gap-1'><img src="/src/assets/cross-23.png" width='24px' alt="" />20 GB Bandwith</li>
          </ul>
               <button className='bg-yellow-400  rounded-full mt-4 mb-6 px-5 py-3'>Order Now</button>
    </div>
  )
}
