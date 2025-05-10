import {SuccessData} from './data'
import SuccessCard from './SuccessCard'
export default function Success(){
    return(
        <div>
            <SuccessCard SuccessData={SuccessData}/>
        </div>
    )
}