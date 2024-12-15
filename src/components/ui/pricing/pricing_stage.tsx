interface PricingStageType {
    stage1: boolean;
    stage2: boolean;
    stage3: boolean
}

const PricingStage = ({ stage1, stage2, stage3 }: PricingStageType) => {
    return (
        <div className="flex gap-4 w-[85%] justify-center self-center">
            <div className="flex flex-col items-center gap-1">
                <span className={`w-5 h-5 rounded-full text-center flex items-center justify-center p-4 ${stage1 ? 'bg-black text-white': 'bg-gray-300 text-black'}`}>
                    1
                </span>
            </div>
            <div className={`w-[100px] md:w-[200px] h-[1.2px] self-center ${stage2 ? 'bg-black': 'bg-gray-300'}`}/>
            <div className="flex flex-col items-center gap-1">
                <span className={`w-5 h-5 rounded-full text-center flex items-center justify-center p-4 ${stage2 ? 'bg-black text-white': 'bg-gray-300 text-black'}`}>
                    2
                </span>

            </div>
            <div className={`w-[100px] md:w-[200px] h-[1.2px] self-center ${stage3 ? 'bg-black': 'bg-gray-300'}`} />
            <div className="flex flex-col items-center gap-1">
                <span className={`w-5 h-5 rounded-full text-center flex items-center justify-center p-4 ${stage3 ? 'bg-black text-white': 'bg-gray-300 text-black'}`}>
                    3
                </span>

            </div>
        </div>
    )
}

export default PricingStage