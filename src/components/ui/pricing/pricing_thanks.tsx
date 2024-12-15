import usePopUpContext from "../../hooks/usePopUpHook"
import PricingStage from "./pricing_stage"

const PricingThanks = () => {
    const { setPopUp, setStep } = usePopUpContext()


    const handleClose = () => {
        setPopUp(false)
        setStep(0)
    }
  return (
    <section className="flex flex-col gap-6 h-[350px] relative">
        <PricingStage stage1={true} stage2={true} stage3={true} />
        <div className="flex flex-col gap-4 items-center mt-4">
            <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center">
                Thank you!!
            </h1>
            <p className="text-lg xl:text-2xl font-light">
                We'll send you a confirmation email. Looking forward to seeing you soon.
            </p>
        </div>
        <button type="button" onClick={handleClose} className="py-3 w-[100%] rounded-lg xl:text-[20px] bg-black text-white mt-3 absolute bottom-0">
            Back To Home
        </button>
    </section>
  )
}

export default PricingThanks