import { useState } from "react"
import Input from "./input_membership"
import PricingStage from "./pricing_stage"
import PricingButton from "./pricing_button"
import validateName from "../../lib/auth/validate_name"
import usePopUpContext from "../../hooks/usePopUpHook"
import validateDate from "../../lib/auth/validate_date"

const PricingMembershipDetails = () => {
    const [isLoading, setIsLoading] = useState(false)


    const [membershipDetails, setMembershipDetails] = useState({
        plan: '',
        duration: '',
        start_date: '',
        goals: ['']
    })

    const [membershipDetailsError, setMembershipDetailsError] = useState({
        planError: true,
        durationError: '',
        start_dateError: '',
        goalsError:'',
    })

    const goals = [
        'Weight loss',
        'Body Building',
        'Power lifting',
        'Cardio',
        'Flexibility',
        'Nutrition',
        'Strength training',
        'Injury recovery',
        'Yoga',
    ]

    const { setStep } = usePopUpContext()

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // update value of input as user types
        setMembershipDetails({ ...membershipDetails, [e.target.name]: e.target.value })
        setMembershipDetailsError({...membershipDetailsError, [e.target.name + 'Error']: '' }) // clear error message when input is changed
    }

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // update selected option of dropdown
        setMembershipDetails({...membershipDetails, plan: e.target.value })
        setMembershipDetailsError({...membershipDetailsError, planError: true }) // clear error message when input is changed
    }

    const editGoals = (goal: string) => {
        if (!membershipDetails.goals.includes(goal)) {
            setMembershipDetails({...membershipDetails, goals: [...membershipDetails.goals, goal]})
        } else {
            setMembershipDetails({...membershipDetails, goals: membershipDetails.goals.filter((g) => g!== goal)})
        }
    }

    // function to validate user input and submit form
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true) // start loading animation while making request

        // load animation first
        setTimeout(async () => {
            // collect all user input validation result in object
            const validateInput = {
                duration: validateName(membershipDetails.duration, 'How long do you want to work out?'),
                plan: membershipDetails.plan === '' ? false : true,
                start_date: validateDate(membershipDetails.start_date),
            }

            // if they all return false then the user input is valid
            if ((validateInput.duration.error === '') && validateInput.plan && (validateInput.start_date.error === '')) {
                // proceed to next stage
                setStep(2)
            } else {
                 // set the error message as user input is invalid.
                setMembershipDetailsError({
                    ...membershipDetailsError,
                    planError: validateInput.plan,
                    durationError: validateInput.duration.error,
                    start_dateError: validateInput.start_date.error
                })
                console.log(validateInput.start_date.error)
                setIsLoading(false) // stop loading animation when error occurs
            }
        }, 2000)
    }

    return (
        <section className="flex flex-col gap-6">
            <PricingStage stage1={true} stage2={true} stage3={false} />
            <div className="flex flex-col gap-6">
                <h6 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold">
                    Membership Details
                </h6>
                <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <select name="plan" id="plan" onChange={onSelectChange} value={membershipDetails.plan} className={`text-[14px] w-[100%] font-normal opacity-80 text-black px-4 h-[42px] border cursor-pointer bg-gray-100 rounded-md focus:shadow-xl focus:border-0 focus:outline-none shadow-lg appearance-none ${!membershipDetailsError.planError ? 'border-2 border-red-500' : 'border-gray-200'}`}>
                        <option value="">
                            Select Membership Type
                        </option>
                        <option value="basic">
                            Basic
                        </option>
                        <option value="standard">
                            Standard
                        </option>
                        <option value="premium">
                            Premium
                        </option>
                    </select>
                    <div className="flex justify-between flex-col md:flex-row gap-2 md:gap-0">
                        <Input type="text" value={membershipDetails.duration} name="duration" placeholder="Duration" error={membershipDetailsError.durationError === '' ? false : true} errorMessage={membershipDetailsError.durationError} onInputChange={onInputChange} widthDiff={true} />
                        <Input type="date" value={membershipDetails.start_date} name="start_date" placeholder="" error={membershipDetailsError.start_dateError === '' ? false : true} errorMessage={membershipDetailsError.start_dateError} onInputChange={onInputChange} widthDiff={true} />
                    </div>
                    <div className="flex gap-2 gap-x-4 flex-wrap w-[100%]">
                        {
                            goals.map((goal) => (
                                <button onClick={() => editGoals(goal)} type="button" className={`text-[16px] xl:text-[18px] 2xl:text-[20px] w-fit rounded-xl py-2 px-6 border-gray-200 hover:bg-black hover:text-white ${membershipDetails.goals.includes(goal) ? 'bg-black text-white': 'bg-gray-100 text-black'}`}>
                                    {goal}
                                </button>
                            ))
                        }
                    </div>
                    <PricingButton loading={isLoading} />
                </form>
            </div>
        </section>
    )
}

export default PricingMembershipDetails