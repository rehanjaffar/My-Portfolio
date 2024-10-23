
import { useState } from 'react'
import './App.css'
import { CenterMenu } from './CenterMenu'
import { ContactUs } from './Components/Contact'
import { LeftMenu } from './LeftMenu'
import { RightMenu } from './RightMenu'
import { SectionFour } from './SectionFour'
import { SectionThree } from './SectionThree'
import { NavBar } from './Components/NavBar';
import HomePage from './Components/HomePage'
import SecondPage from './Components/SecondPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  
  let [value, setValue] = useState(true);
  let [newval, setNeval] = useState(true);
  let [bg, setbg] = useState(true);

  console.log(bg);
  
  let chngbg = () => {
    return (
      setbg(!bg)
    )
  }

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
      <NavBar onHandle={changeVal} onHide={hideVal} />
      <BrowserRouter>
        <Routes>
     
          <Route exact path='/' element = { <HomePage bg={bg} props={value } newprops={newval} chngbg={chngbg} />}/>
          <Route exact path='/about' element = {  <SecondPage bg={bg} newprops={newval} chngbg={chngbg}/>}/>
         
          </Routes>
</BrowserRouter>
   
      </>
  )
}

export default App
