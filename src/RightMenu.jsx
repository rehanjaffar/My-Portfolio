import { RiDownload2Fill, RiFacebookFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from "@remixicon/react";


export function RightMenu({ props, bg }) {
    let bgchng;
    if (bg === false) {
        bgchng = "bgchng"
    }

   let newclass
    if (props === false) {
         newclass = "rightShow"
    }
    
    
    return (
         <div className={`right ${newclass} ${bgchng} flex flex-col items-center w-[305px] xl:h-[1315px] bg-white`}>
            <div className="profile xl:w-[219px] xl:h-[281px] mt-[50px] mb-[25px]  flex flex-col items-center">
                <img src="/src/assets/profile.jpeg" alt="" className="rounded-[50%] mb-[18px]"/>
                <h1 className="text-lg font-medium mb-[12px]">M Rehan Jaffar</h1>
                
                <h3 className="text-[15px] mb-[12px]">Front-End Developer</h3>
             
                <div>
                    <ul className="list-none">
                        <li className="w-7 h-7 inline-flex justify-center items-center bg-[rgb(255,180,0)] rounded-[50%] mx-1"><a
                                href="#"><RiFacebookFill/></a></li>
                        <li className="w-7 h-7 inline-flex justify-center items-center bg-[rgb(255,180,0)] rounded-[50%] mx-1"><a
                                href="#"><RiInstagramFill/></a></li>
                        <li className="w-7 h-7 inline-flex justify-center items-center bg-[rgb(255,180,0)] rounded-[50%] mx-1"><a
                                href="#"><RiTwitterFill/></a></li>
                        <li className="w-7 h-7 inline-flex justify-center items-center bg-[rgb(255,180,0)] rounded-[50%] mx-1"><a
                                href="#"><RiLinkedinFill/></a></li>
                        <li className="w-7 h-7 inline-flex justify-center items-center bg-[rgb(255,180,0)] rounded-[50%] mx-1"><a
                                href="#"><RiYoutubeFill/></a></li>
                        <li className="w-7 h-7 inline-flex justify-center items-center bg-[rgb(255,180,0)] rounded-[50%] mx-1"><a
                                href="#"><RiGithubFill/></a></li>

                    </ul>
                </div>
            </div>
            <hr className="w-[220px] border border-solid border-red-200"/>

            <div className="about w-[220px] h-[126px] mb-[25px] mt-[25px]">
                <p className="inline-flex justify-between w-full text-[15px] p-1"><span
                        className="px-3 bg-[rgb(255,180,0)]">Age:</span><span>24</span></p>
                <p className="inline-flex justify-between w-full text-[15px] p-1"><span
                        className="px-3 bg-[rgb(255,180,0)]">Residency:</span><span>On Earth</span>
                </p>
                <p className="inline-flex justify-between w-full text-[15px] p-1"><span
                        className="px-3 bg-[rgb(255,180,0)]">Freelance:</span><span>Available</span>
                </p>
                <p className="inline-flex justify-between w-full text-[15px] p-1">
                    <span className="px-3 bg-[rgb(255,180,0)]">Address:</span><span>Lahore,Pakistan</span>
                </p>
            </div>
            <hr className="w-[220px] border border-solid border-red-200"/>

            <div className="language w-[220px] h-[153px] mb-[25px] mt-[25px]">
                <p className="text-lg font-medium pb-[5px]">Languages</p>
                <p className="inline-flex justify-between w-full text-[15px] text-[#767676] pb-[5px]">
                    <span>Urdu</span><span>100%</span>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mb-[9px]">
                    <div className="bg-[rgb(255,180,0)] h-1 rounded-full w-full"></div>
                </div>

                <p className="inline-flex justify-between w-full text-[15px] text-[#767676] pb-[5px]">
                    <span>English</span><span>70%</span>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mb-[9px]">
                    <div className="bg-[rgb(255,180,0)] h-1 rounded-full w-[70%]"></div>
                </div>
                <p className="inline-flex justify-between w-full text-[15px] text-[#767676] pb-[5px]">
                    <span>Chinese</span><span>40%</span>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mb-[9px]">
                    <div className="bg-[rgb(255,180,0)] h-1 rounded-full w-[40%]"></div>
                </div>
            </div>
            <hr className="w-[220px] border border-solid border-red-200"/>

            <div className="skill w-[220px] h-[242px] mb-[25px] mt-[25px]">
                <p className="text-lg font-medium pb-[15px]">Skills</p>
                <p className="inline-flex justify-between w-full text-[15px] text-[#767676] pb-[10px]">
                    <span>HTML</span><span>90%</span>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mb-[15px]">
                    <div className="bg-[rgb(255,180,0)] h-1 rounded-full w-[90%]"></div>
                </div>

                <p className="inline-flex justify-between w-full text-[15px] text-[#767676] pb-[10px]">
                    <span>CSS</span><span>85%</span>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mb-[15px]">
                    <div className="bg-[rgb(255,180,0)] h-1 rounded-full w-[85%]"></div>
                </div>
                <p className="inline-flex justify-between w-full text-[15px] text-[#767676] pb-[10px]">
                    <span>JS</span><span>80%</span>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mb-[15px]">
                    <div className="bg-[rgb(255,180,0)] h-1 rounded-full w-[80%]"></div>
                </div>
                <p className="inline-flex justify-between w-full text-[15px] text-[#767676] pb-[10px]">
                    <span>React JS</span><span>80%</span>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mb-[15px]">
                    <div className="bg-[rgb(255,180,0)] h-1 rounded-full w-[80%]"></div>
                </div>
            </div>
            <hr className="w-[220px] border border-solid border-red-200"/>

            <div className="extraskill w-[186px] h-[148px] mb-[25px] mt-[25px]">
                <p className="text-lg font-medium pb-[12px]">Extra Skills</p>
                <p className="inline-flex gap-[10px] p-1 text-[15px] text-[#767676]"><img src="/src/assets/square.svg"
                        alt=""/>Bootsrap</p>
                <p className="inline-flex gap-[10px] p-1 text-[15px] text-[#767676]"><img src="/src/assets/square.svg"
                        alt=""/>Tailwind CSS</p>
                <p className="inline-flex gap-[10px] p-1 text-[15px] text-[#767676]"><img src="/src/assets/square.svg" alt=""/>Git,
                    GitHub</p>

            </div>
            <hr className="w-[220px] border border-solid border-red-200"/>
            <button className="text-sm font-semibold mt-[25px] py-[10px] px-[40px] bg-[rgb(255,180,0)] flex justify-center items-center">DOWNLOAD CV <RiDownload2Fill
                    className="pl-[10px]"/></button>
        </div>
    )
}