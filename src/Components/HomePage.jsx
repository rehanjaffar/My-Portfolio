import React from 'react'
import { RightMenu } from '../RightMenu'
import { CenterMenu } from '../CenterMenu'
import { LeftMenu } from '../LeftMenu'

export default function HomePage({bg,props,newprops, chngbg}) {
  return (
      <div className='main flex justify-center w-screen bg-[#E5E5E5]'>
          <RightMenu bg={bg} props={props} />
           {props && newprops ?  <CenterMenu bg={bg} /> : ""} 
          <LeftMenu bg={bg} props={newprops} chngbg={chngbg} />
      </div>
  )
}
