import { AnimatePresence, motion } from 'motion/react'
import { IoCloseSharp } from "react-icons/io5";

import icon from '../../../assets/images/price_icon.svg'
import PricingBasicDetails from './pricing_basic_details';
import usePopUpContext from '../../hooks/usePopUpHook';
import PricingMembershipDetails from './pricing_membership_details';
import PricingThanks from './pricing_thanks';


const PricingPopUp = () => {
    const { setPopUp, step, setStep } = usePopUpContext()

    // list of all steps
    const popUpSteps = [
        <PricingBasicDetails />,
        <PricingMembershipDetails />,
        <PricingThanks />
    ]

    const closePopUp = () => {
        setPopUp(false)
        setStep(0)
    }

    return (
        <div className='w-[100%] h-[100vh] flex justify-center items-center fixed z-30 top-0 backdrop-brightness-[.2]'>
            <motion.section className='w-[100%] md:w-[670px] xl:w-[750px] 2xl:w-[800px] asideScroll rounded-xl flex flex-col font-main gap-4 px-6 border border-gray-200 shadow-xl bg-white overflow-y-auto h-fit py-4'>
                <div className='w-[100%] flex justify-between py-2 border-b'>
                    <div className='flex items-center gap-4'>
                        <img src={icon} alt="FitGuru" />
                        <p className='text-lg font-semibold'>
                            Join us Now!!
                        </p>
                    </div>
                    <button type="button" onClick={closePopUp}>
                        <IoCloseSharp className='w-6 h-6' />
                    </button>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key= {step}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    >
                        {popUpSteps[step]}
                    </motion.div>
                </AnimatePresence>
            </motion.section>
        </div>
    )
}

export default PricingPopUp