import {exploreCardData} from './data'
import ExploreCard from './ExploreCards'
import FilterSlider from '../FilterSlider'

export default function Explore(){
    return(
        <div>
            <FilterSlider/>
            <ExploreCard
              exploreCardData={exploreCardData}
            />
        </div>
    )
}