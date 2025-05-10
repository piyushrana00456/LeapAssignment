
import classNames from 'classnames';
import './Success.css'
export default function SuccessCard({ SuccessData }) {

    console.log({ SuccessData });

    return (
        <div>
            {SuccessData.map((item, index) => (
                <div className={classNames("p-3 border-gray-300 border-2 mb-3 rounded-3xl", item.brand.length > 0 ? 'h-auto' : 'h-[9.5rem]')}>
                    <div className={classNames(index === 0 ? 'successBg' : 'bg-custom-gradient' , item.brand.length > 0 && 'h-[9.5rem]' , 'flex items-center flex-col justify-center h-full rounded-3xl')}>
                        <div className={classNames(index === 0 ? 'text-white' : 'gradient-text' , "text-[32px] font-bold")}>
                            {item.header}
                        </div>
                        <div className={classNames(index === 0 ? 'text-white' : 'simple-text' , "text-[16px]")}>
                            {item.des}
                        </div>
                    </div>
                    {item?.brand.length > 0 && (
                       <div className='Logocontainer'>
                         {item?.brand.map((bnd) => (
                            <div className='logo-box'>
                              <img src={bnd.logo} alt="" />     
                            </div>
                         ))}
                       </div> 
                    )}
                </div>
            ))}
        </div>
    )
}