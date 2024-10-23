import { RiArrowRightLine } from "@remixicon/react";

export function SectionOne({bg}) {
    let bgchng;
    let clr
    if (bg === false) {
        bgchng = "bgchng"
        clr = 'white'
    }
    return (
        <section className={`first ${bgchng} flex xl:w-[970px] md:h-[468px] bg-white lg:ml-[30px] my-5` } >
                <div className="m-3 md:mt-[90px] md:ml-[60px] md:w-[500px] ">
                <h1 className="xl:text-[48px] font-bold loading=[40px] mb-[18px] move-text">I'm M Rehan Jaffar</h1>
                <h1 className="xl:text-[48px] font-bold pb-[18px]">
                    <span
                            className="text-[rgb(255,180,0)]">Front-End </span>Developer
                    </h1>
                    <p className={`text-[10px] md:text-[16px] text-[#767676] text-${clr}  `} >Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Et,
                        volutpat feugiat
                        placerat lobortis.
                        Natoque rutrum semper
                        sed suspendisse nunc lectus.</p>
                    <button className="flex justify-center items-center md:text-sm md:font-semibold md:mt-[25px] md:py-[16px] md:px-[32px] p-1 my-1 bg-[rgb(255,180,0)]">HIRE ME
                        <RiArrowRightLine/> </button>
                </div>
                <div className="ml-[26px] xl:w-[325px] md:h-full flex justify-center items-center">
                    <img src="/src/assets/profile.jpeg" className=" lg:h-full h-[-webkit-fill-available]" alt=""/>
                </div>
            </section>
    )
}