import React, { useState } from 'react'
import PricingButton from '../pricing/pricing_button'
import usePopUpContext from '../../hooks/usePopUpHook'



const ReviewForm = () => {
    const { setReviewStep } = usePopUpContext()

    const [userReview, setUserReview] = useState({
        icon: '😐',
        text: ''
    })

    const reviewEmojis = [
        { emoji: "😡", meaning: "Frustrated" },
        { emoji: "😞", meaning: "Dissatisfied" },
        { emoji: "😐", meaning: "Average" },
        { emoji: "😊", meaning: "Satisfied" },
        { emoji: "🤩", meaning: "Exceeded Expectations" }
    ];

    const [isLoading, setIsLoading] = useState(false)

    const onInputChange = (icon: string) => {
        setUserReview({ ...userReview, icon: icon })
    }

    const onTextAreaChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserReview({ ...userReview, text: e.target.value })
    }

    // function to send review
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true) // start loading animation while making request

        // load animation first
        setTimeout(async () => {
            setUserReview({
                icon: '😐',
                text: ''
            })
            setReviewStep(1)
        }, 1000)
    }

    return (
        <section className='flex flex-col w-[100%] gap-4'>
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center">
                    How are you feeling!!
                </h1>
                <p className="text-[16px] xl:text-lg font-light w-[90%] text-center">
                    Your input is valuable in helping us understand your need and tailor our services to better suit you.
                </p>
            </div>
            <form noValidate onSubmit={handleSubmit}  className='w-[100%] flex gap-6 flex-col'>
                <div className='flex justify-center gap-4 w-[100%]'>
                    {
                        reviewEmojis.map((value) => (
                            <button title={value.meaning} type='button' key={value.emoji} className={`text-3xl xl:text-4xl 2xl:text-5xl border border-gray-200 rounded-full hover:bg-black ${userReview.icon === value.emoji ? 'bg-black scale-110 p-4' : 'bg-white p-3'}`} onClick={() => onInputChange(value.emoji)}>
                                {value.emoji}
                            </button>
                        ))
                    }
                </div>
                <textarea onChange={onTextAreaChange} rows={3} name="text" id="text" placeholder='Add a comment' className='w-[100%] rounded-lg border border-gray-200 p-4 placeholder:font-light font-normal text-[16px] xl:text-[18px] 2xl:text-[20px]' />
                <PricingButton loading={isLoading} text='Submit Now' />
            </form>
        </section>
    )
}

export default ReviewForm