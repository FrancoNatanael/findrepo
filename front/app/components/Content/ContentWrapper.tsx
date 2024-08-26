import PrincipalContent from "./PrincipalContent/PrincipalContent";
import SideContent from "./SideContent/SideContent";

export default function ContentWrapper(){
    return <div className="flex justify-between">
        <SideContent/>
        <PrincipalContent/>
    </div>
}