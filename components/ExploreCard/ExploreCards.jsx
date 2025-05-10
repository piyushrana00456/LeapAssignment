"use client"
import {Target, MoveRight} from 'lucide-react'; 
export default function ExploreCard({exploreCardData}){
  console.log({exploreCardData});
  
  return(
    <div className="flex flex-col">
      {exploreCardData.map((data) => (
        <div key={data.id} className="border p-1 h-[465px] mb-3 rounded-3xl relative" style={{backgroundColor:data.bgColor}}>
           <div className="w-full">
              <img src={data.CardImage} className="w-full object-cover object-center h-[180px] rounded-t-3xl rounded-tr-3xl" alt=""  />
           </div>
           <div className="py-4 px-6 text-xl font-bold">
              <h3>{data.heading}</h3>
           </div>
           <div className="py-4 px-6">
            {data?.details.map((detail) => (
              <div key={detail.id} className='flex mb-2 items-center'>
                <span className='mr-2'><Target width={20} height={20}/></span>
                <p className='text-sm font-normal flex items-center'>{detail.description}</p>
              </div>
            ))}
           </div>
           <div className='p-4 absolute bottom-2'> 
             <div className='w-48 p-3 h-[40px] rounded-xl text-white flex items-center bg-[#1C2233]'>
              <span>Get started for free</span><span className='ml-2'> <MoveRight size={20} /> </span>
             </div>
           </div>
        </div>
      ))}
    </div>
  )
}