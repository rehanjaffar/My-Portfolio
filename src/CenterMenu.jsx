
import { SectionOne } from "./SectionOne";
import { SectionTwo } from "./SectionTwo";

export function CenterMenu({bg}) {
    

    return (
        <div className={`center`} >
            <SectionOne bg={ bg} />
            <SectionTwo bg={ bg} />
        
            
        </div>
    )
}