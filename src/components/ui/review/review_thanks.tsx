import usePopUpContext from "../../hooks/usePopUpHook"

const ReviewThanks = () => {
    const { setReview, setReviewStep } = usePopUpContext()


    const handleClose = () => {
        setReviewStep(0) // take stage back to 1
        setReview(false) // close popup
    }
  return (
    <section className="flex flex-col gap-6 h-[350px] relative">
        <div className="flex flex-col gap-4 items-center mt-4">
            <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center">
                Thank you!!
            </h1>
            <p className="text-lg xl:text-2xl font-light w-[90%] text-center">
                We appreciate your feedback and suggestions. We will be sure to take into consideration your suggestions.
            </p>
        </div>
        <button type="button" onClick={handleClose} className="py-3 w-[100%] rounded-lg xl:text-[20px] bg-black text-white mt-3 absolute bottom-0">
            Back To Home
        </button>
    </section>
  )
}

export default ReviewThanks