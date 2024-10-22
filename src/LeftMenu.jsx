import { RiBriefcase4Fill, RiContrast2Fill, RiGraduationCapFill, RiHome2Fill, RiPhoneFill, RiQuillPenFill, RiServiceLine } from "@remixicon/react";

export function LeftMenu({props}) {
     let leftclass
    if (props === false) {
        leftclass = "leftShow";
    }
    
    return (
        <div className={`left-menu ${leftclass} w-[108px] md:h-[1315px] bg-white ml-[27px] flex flex-col`}>
            <div className="h-[130px] flex justify-center items-center">
                <a href="#" className="lg:text-[30px]"><RiContrast2Fill/></a>
            </div>
            <div className="flex justify-center mt-[162px]">
                <ul>
                    <li
                        className="flex flex-col justify-center items-center mb-[43px] md:w-[40px] h-[40px] rounded-[50%] bg-[rgb(225,180,0)]">
                        <a href="#"><RiHome2Fill className="lg:text-[18px]"/></a>
                    </li>
                    <li
                        className="flex flex-col justify-center items-center mb-[43px] md:w-[40px] h-[40px] rounded-[50%] bg-[rgb(225,180,0)]">
                        <a href="#"><RiServiceLine className="lg:text-[18px]"/></a>
                    </li>
                    <li
                        className="flex flex-col justify-center items-center mb-[43px] md:w-[40px] h-[40px] rounded-[50%] bg-[rgb(225,180,0)]">
                        <a href="#"><RiGraduationCapFill className="lg:text-[18px]"/></a>
                    </li>
                    <li
                        className="flex flex-col justify-center items-center mb-[43px] md:w-[40px] h-[40px] rounded-[50%] bg-[rgb(225,180,0)]">
                        <a href="#"><RiBriefcase4Fill className="lg:text-[18px]"/></a>
                    </li>
                    <li
                        className="flex flex-col justify-center items-center mb-[43px] md:w-[40px] h-[40px] rounded-[50%] bg-[rgb(225,180,0)]">
                        <a href="#"><RiQuillPenFill className="lg:text-[18px]"/></a>
                    </li>
                    <li
                        className="flex flex-col justify-center items-center mb-[43px] w-5 md:w-[40px] h-[40px] rounded-[50%] bg-[rgb(225,180,0)]">
                        <a href="#"><RiPhoneFill className="lg:text-[18px]"/></a>
                    </li>

                </ul>
            </div>
        </div>
    )
}