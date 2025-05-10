
export default function Supports() {
    return (
        <div className="w-full max-w-3xl mx-auto px-3 py-5">
            <div className="text-center mb-8">
                <h2 className="text-[2rem] font-bold text-gray-900 mb-2">Everything you need to study abroad</h2>
                <p className="text-lg text-gray-600">What brings you to Leap today?</p>
            </div>
            <div className="mt-8 grid grid-cols-2 grid-rows-2-custom gap-[0.75rem]">
                {/* Row 0, Col 0 (Tall) */}
                <div className="bg-custom-gradient row-span-2 rounded-tl-[24px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[16px] relative overflow-hidden">
                    <div className="pt-4 px-4">
                        <p className="font-semibold text-sm">University Shortlist</p>
                        <p className="text-xs text-gray-500 mt-1">In less than 5 mins</p>
                    </div>
                    <div className="w-[100%] flex justify-end items-end">
                        <img src="/gridImage1.png" alt="" className="w-[60%] h-[60%]" />
                    </div>
                </div>

                {/* Row 0, Col 1 (Short) */}
                <div className="bg-custom-gradient row-span-2 col-start-2 row-start-2 rounded-tl-[16px] rounded-tr-[24px] rounded-bl-[16px] rounded-br-[16px] relative overflow-hidden">
                    <div className="pt-4 px-4">
                        <p className="font-semibold text-sm">Financial guidance</p>
                        <p className="text-xs text-gray-500 mt-1">Scholarships & loans</p>
                    </div>
                    <div className="w-[100%] flex justify-end">
                        <img src="/gridImage4.png" alt="" className="w-[60%] h-[60%]"/>
                    </div>
                </div>

                {/* Row 1, Col 0 (Short) */}
                <div className="bg-custom-gradient col-start-1 row-start-3 rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[24px] rounded-br-[16px] overflow-hidden">
                    <div className="flex"> 
                    <div className="pt-3 pl-3">
                        <p className="font-semibold text-sm">Visa Support</p>
                    </div>
                    <div className="w-[60%] left-1/2 top-8">
                        <img src="/gridImage3.png" alt="" />
                    </div>
                    </div>
                </div>
                {/* Row 1, Col 1 (Tall) */}
                <div className="bg-custom-gradient col-start-2 row-start-1 rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[24px] overflow-hidden relative">
                    <div className="flex">
                        <div className="pt-3 pl-3">
                        <p className="font-semibold text-sm">Test Prep</p>
                        </div>
                        <div className="w-[60%] left-1/2 top-8">
                        <img src="/gridImage2.png" alt="" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}