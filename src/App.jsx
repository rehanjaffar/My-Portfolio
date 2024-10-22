
import { useState } from 'react'
import './App.css'
import { CenterMenu } from './CenterMenu'
import { ContactUs } from './Components/Contact'
import { LeftMenu } from './LeftMenu'
import { RightMenu } from './RightMenu'
import { SectionFour } from './SectionFour'
import { SectionThree } from './SectionThree'
import { NavBar } from './Components/NavBar';

function App() {
  
  let [value, setValue] = useState(true);
 let [newval, setNeval] = useState(true)
  let changeVal = () => {
    return (
      setValue(!value)
    )
  };
 
  
let hideVal = () => {
  return (
    setNeval(!newval)
 
    )
  }
  return (
    <>
      <NavBar onHandle={ changeVal} onHide={hideVal} />
      <div className='main flex justify-center w-screen bg-[#E5E5E5]'>
        
    {newval ? <RightMenu props = {value} /> : ""}  
    {value && newval ?  <CenterMenu /> : ""} 
      <LeftMenu props = {newval}/>
      </div>
    {value && newval ? <div className='flex flex-col justify-center w-screen bg-[#E5E5E5]'>
        <SectionThree />
        <SectionFour />
        <ContactUs/>
        </div> : ""}  
      </>
  )
}

export default App
