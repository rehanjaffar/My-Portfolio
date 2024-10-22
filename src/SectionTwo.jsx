import { ServiceData } from "./Components/ServiceData";
import SectionTwoCards from "./SectionTwoCards";

export function SectionTwo() {
    
    
    return (
        <section className="services flex flex-col items-center xl:w-[970px] lg:ml-[30px] my-5">
            <div className="md:w-[440px] text-center">
                <h1 className="text-[24px] md:text-[32px] font-bold md:pb-[25px]">My Services</h1>
                <p className="text-[12px] md:text-[15px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            </div>
            <div className="flex flex-wrap gap-5 items-center justify-center mt-8">
                
                {ServiceData.map((v, i) => {
                return(
                    <SectionTwoCards pitems={v} key={i} />
                )
            })}

            </div>
        </section>
    )
}