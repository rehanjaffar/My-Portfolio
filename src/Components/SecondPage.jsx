import React from 'react'
import { SectionThree } from '../SectionThree'
import { SectionFour } from '../SectionFour'
import { ContactUs } from './Contact'
import { LeftMenu } from '../LeftMenu'

export default function ({ bg, props, newprops, chngbg }) {
  
    return (
        <div className='flex'>
      { newprops ? <div className='flex flex-col justify-center w-screen bg-[#E5E5E5]'>
                  <SectionThree bg={bg} />
        <SectionFour bg={bg} />
          <ContactUs bg={ bg} />
            </div>   : ""}
      
            <LeftMenu bg={bg} props={newprops} chngbg={chngbg}/>
            </div>
  )
}
