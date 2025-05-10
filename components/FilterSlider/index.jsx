import {FilterData} from './data'
import './Filter.css'
export default function FilterSlider() {

    return(
        <div className='filter-scroll mb-6 flex overflow-x-auto whitespace-nowrap gap-4 px-3 py-4'>
            {FilterData.map((el, index) => (
                <div key={el.id} className='flex items-center justify-center min-w-[200px] bg-gray-100 p-3 rounded-2xl text-[16px] font-medium' style={{background:index === 0 && '#CAC9FF' }}>{el.value}</div>
            ))}
        </div>
    )
}