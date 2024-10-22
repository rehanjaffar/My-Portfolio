import PriceCards from "./Components/PriceCards";
import { PriceData } from "./Components/PriceData";
import RecommendCard from "./Components/RecommendCard";
import { RecommendData } from "./Components/RecommendData";

export function SectionFour() {
    
    
    return (
        <section className="recommend flex flex-col items-center  lg:ml-[30px] my-5">
            <div className="md:w-[440px] text-center">
                <h1 className="text-[24px] md:text-[32px] font-bold md:pb-[25px]">Recommendations</h1>
                <p className="text-[12px] md:text-[15px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            </div>
            <div className="flex gap-7 flex-wrap justify-center items-center m-5">
                {RecommendData.map((v, i)=>{
                    return(
                <RecommendCard pitems={v } key={i} />
                    )
                })}
                
            </div>
        </section>
    )
}