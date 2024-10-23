import { RiBriefcase4Fill, RiContrast2Fill, RiGraduationCapFill, RiHome2Fill, RiPhoneFill, RiQuillPenFill, RiServiceLine } from "@remixicon/react";
import { Link } from "react-router-dom";

export function LeftMenu({ props, chngbg, bg }) {
    let bgchng;
    if (bg === false) {
    bgchng = "bgchng"
}


    let leftclass;
    if (props === false) {
        leftclass = "leftShow";
    }
    
    return (
        <div className={`left-menu ${leftclass} ${bgchng} w-[108px] md:h-[1315px] bg-white ml-[27px] flex flex-col`}>
            <div className="h-[130px] flex justify-center items-center">
                <a href="#" className="lg:text-[30px]" onClick={chngbg}><RiContrast2Fill/></a>
            </div>
            <div className="flex justify-center mt-[162px]">
                <ul>
                    <li
                        className="flex flex-col justify-center items-center mb-[43px] md:w-[40px] h-[40px] rounded-[50%] bg-[rgb(225,180,0)]">
                   <Link to='/'>    <RiHome2Fill className="lg:text-[18px]"/></Link> 
                    </li>
                    
                   
                    <li
                        className="flex flex-col justify-center items-center mb-[43px] md:w-[40px] h-[40px] rounded-[50%] bg-[rgb(225,180,0)]">
                       <Link to='/about'><RiBriefcase4Fill className="lg:text-[18px]"/></Link>
                    </li>
                    
                    <li
                        className="flex flex-col justify-center items-center mb-[43px] w-5 md:w-[40px] h-[40px] rounded-[50%] bg-[rgb(225,180,0)]">
                     <Link to='/about'>   <RiPhoneFill className="lg:text-[18px]"/></Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}