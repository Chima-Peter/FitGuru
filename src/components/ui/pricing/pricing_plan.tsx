import { useState } from "react"
import { AnimatePresence, motion } from 'motion/react'
import PricingPopUp from "./pricing_popup"
import usePopUpHook from "../../hooks/usePopUpHook"  


const PricingPlan = () => {
    // state to determine whether payment is monthly or annually; if false = monthly, true = annually
    const [duration, setDuration] = useState(false)

    const { popup, setPopUp } = usePopUpHook()

    const openPopUp = () => {
        setPopUp(true)
    }


    const monthlyPricing = [
        {
            plan: 'Beginner',
            price: '$20',
            benefits: ['Access to gym facilities during off-peak hours', "One complimentary fitness assessment per month", "Access to beginner-friendly group classes"]
        },
        {
            plan: 'Premium',
            price: '$40',
            benefits: ["Full access to gym facilities anytime", "Two complimentary fitness assessments monthly", "Access to all group classes", "Monthly check-ins with a trainer"]
        },
        {
            plan: 'Expert',
            price: "$70",
            benefits: ["24/7 gym access", "Unlimited group classes", "Five one-on-one personal training sessions monthly", "Customized fitness and nutrition plans", "Priority access to premium amenities (e.g., sauna, pool, massage chairs)"]
        }
    ]

    const yearlyPricing = [
        {
            plan: 'Beginner',
            price: '$200',
            benefits: ['Access to gym facilities during off-peak hours', "One complimentary fitness assessment per month", "Access to beginner-friendly group classes"]
        },
        {
            plan: 'Premium',
            price: '$400',
            benefits: ["Full access to gym facilities anytime", "Two complimentary fitness assessments monthly", "Access to all group classes", "Monthly check-ins with a trainer"]
        },
        {
            plan: 'Expert',
            price: "$700",
            benefits: ["24/7 gym access", "Unlimited group classes", "Five one-on-one personal training sessions monthly", "Customized fitness and nutrition plans", "Priority access to premium amenities (e.g., sauna, pool, massage chairs)"]
        }
    ]

    const toggleToMonthly = () => {
        setDuration(false)
    }
    const toggleToAnnually = () => {
        setDuration(true)
    }
  return (
    <section className={`flex flex-col gap-4 mt-8`} id="plans">
        <h4 className="text-[16px] xl:text-xl 2xl:text-2xl font-light opacity-70 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[130px] 2xl:px-[160px]">
            Pricing Plan
        </h4>
        <div className="flex md:flex-row md:justify-between w-[100%] flex-col gap-8 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[130px] 2xl:px-[160px]">
            <h4 className="text-4xl uppercase font-extrabold">
            Join Us Today
            </h4>
            <div className="w-fit flex gap-0 rounded-2xl border border-gray-200 shadow-xl self-end">
                <motion.button
                    initial={{ color: '#000000', backgroundColor: '#ffffff' }}
                    animate={
                        !duration
                        ? { color: '#ffffff', backgroundColor: '#000000' }
                        : { color: '#000000', backgroundColor: '#ffffff' }
                    }
                    transition={{ duration: 0.5, ease: 'circIn' }}
                    onClick={toggleToMonthly}
                    className="text-sm xl:text-[16px] font-semibold py-2 px-4 rounded-2xl"
                    >
                    Monthly
                    </motion.button>

                    <motion.button
                    initial={{ color: '#000000', backgroundColor: '#ffffff' }}
                    animate={
                        duration
                        ? { color: '#ffffff', backgroundColor: '#000000' }
                        : { color: '#000000', backgroundColor: '#ffffff' }
                    }
                    transition={{ duration: 0.5, ease: 'circIn' }}
                    onClick={toggleToAnnually}
                    className="text-sm xl:text-[16px] font-semibold py-2 px-4 rounded-2xl"
                    >
                    Annually
                </motion.button>
            </div>
        </div>

        <div className="flex flex-col flex-wrap lg:flex-nowrap md:flex-row md:justify-between xl:justify-center xl:gap-16 2xl:gap-32 w-[100%] mt-10 gap-y-8 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[130px] 2xl:px-[160px]">
            <AnimatePresence mode="wait">
                {!duration
                    ? monthlyPricing.map((value) => (
                        <motion.div
                            key={value.price}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="flex px-10 w-[100%] group/parent lg:w-[350px] xl:w-[400px] 2xl:w-[450px] flex-col justify-between py-8 rounded-2xl border border-gray-200 shadow-xl gap-4 hover:bg-black hover:text-white hover:shadow-black hover:border-black"
                        >
                            <div className="flex flex-col gap-1 items-start">
                                <p className="text-sm font-semibold">{value.plan} Plan</p>
                                <h4 className="text-3xl font-extrabold">{value.price} / Month</h4>
                                <ul className="flex flex-col gap-2 list-disc mt-4">
                                    {value.benefits.map((benefit) => (
                                        <li key={benefit} className="text-[16px] font-light opacity-70 text-left">
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button onClick={openPopUp} className="w-[100%] bg-black text-white py-2 text-center text-[16px] font-semibold rounded-lg align-bottom group-hover/parent:bg-white group-hover/parent:text-black">
                                Choose Plan
                            </button>
                        </motion.div>
                    ))
                    : yearlyPricing.map((value) => (
                        <motion.div
                            key={value.price}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="flex px-10 w-[100%] group/parent lg:w-[350px] xl:w-[400px] 2xl:w-[450px] flex-col justify-between py-8 rounded-2xl border border-gray-200 shadow-xl gap-4 hover:bg-black hover:text-white hover:shadow-black hover:border-black"
                        >
                            <div className="flex flex-col gap-1 items-start">
                                <p className="text-sm font-semibold">{value.plan} Plan</p>
                                <h4 className="text-3xl font-extrabold">{value.price} / Yearly</h4>
                                <ul className="flex flex-col gap-2 list-disc mt-4">
                                    {value.benefits.map((benefit) => (
                                        <li key={benefit} className="text-[16px] font-light opacity-70 text-left">
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button onClick={openPopUp} className="w-[100%] bg-black text-white py-2 text-center text-[16px] font-semibold rounded-lg align-bottom group-hover/parent:bg-white group-hover/parent:text-black">
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
            </AnimatePresence>
        </div>

        {/* popup */}
        {
            popup && <PricingPopUp />
        }
    </section>
  )
}

export default PricingPlan  