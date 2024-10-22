import React from 'react'

export default function SectionTwoCards({ pitems }) {
  return (
    <div className="cards border border-solid bg-white flex flex-col justify-center items-center md:p-0 w-[90%] h-[162px] md:w-[285px] md:h-[235px] rounded-lg ">
                    <img src={`/src/assets/${pitems.img}`} alt="" />
          <h3 className="text-xl text-center font-medium p-2">{ pitems.title}</h3>
          <p className='text-center'>{ pitems.description}</p>
                </div>
  )
}
