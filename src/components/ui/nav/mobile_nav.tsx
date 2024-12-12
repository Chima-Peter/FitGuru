import { useState, useEffect } from 'react';
import icon from '../../../assets/images/icon.svg'

const MobileNav = () => {
    const isActive = (hash: string) => location.hash === hash; // determining if a nav link matches the current location

    const [isScrolled, setIsScrolled] = useState(false)

    // add bg and shadow for nav onscroll event
    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
  
    return (
        <nav className={`flex justify-between items-center z-20 w-[100%] fixed top-0 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[130px] 2xl:px-[160px] py-4 font-main ${isScrolled ? 'bg-white shadow-lg' : ''}`}>
            <img src={icon} alt="FitGuru" />
            <button type="button" className='bg-black w-fit rounded-xl hover:shadow-lg text-white text-sm py-2 px-6 font-semibold'>
                Join Now
            </button>
        </nav>
    )
}

export default MobileNav