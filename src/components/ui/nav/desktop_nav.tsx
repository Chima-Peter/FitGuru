import { HashLink as NavLink } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom';



import icon from '../../../assets/images/icon.svg'
import { useEffect, useState } from 'react';

const DesktopNav = () => {
    const location = useLocation(); // for getting the location

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
        <NavLink to="#home">
            <img src={`${icon}`} alt="FitGuru" />
        </NavLink>
        <ul className='flex gap-8 xl:gap-12'>
            <NavLink to={'#home'}>
                <li className={`text-[15px] xl:text-[20px] 2xl:text-[24px] text-[#0D0B0B] hover:font-semibold ${isActive('#home') ? 'font-semibold' : 'font-light'}`}>
                    Home
                </li>
            </NavLink>
            <NavLink to={'#about'}>
                <li className={`text-[15px] xl:text-[20px] 2xl:text-[24px] text-[#0D0B0B] hover:font-semibold ${isActive('#about') ? 'font-semibold' : 'font-light'}`}>
                    About
                </li>
            </NavLink>
            <NavLink to={'#trainers'}>
                <li className={`text-[15px] xl:text-[20px] 2xl:text-[24px] text-[#0D0B0B] hover:font-semibold ${isActive('#trainers') ? 'font-semibold' : 'font-light'}`}>
                    Trainers
                </li>
            </NavLink>
            <NavLink to={'#plans'}>
                <li className={`text-[15px] xl:text-[20px] 2xl:text-[24px] text-[#0D0B0B] hover:font-semibold ${isActive('plans') ? 'font-semibold' : 'font-light'}`}>
                    Plans
                </li>
            </NavLink>
            <NavLink to={'#reviews'}>
                <li className={`text-[15px] xl:text-[20px] 2xl:text-[24px] text-[#0D0B0B] hover:font-semibold ${isActive('#reviews') ? 'font-semibold' : 'font-light'}`}>
                    Reviews
                </li>
            </NavLink>
        </ul>
        <button type="button" className='bg-black w-fit rounded-xl hover:shadow-lg text-white text-sm py-2 px-6 font-semibold'>
            Join Now
        </button>
    </nav>
  )
}

export default DesktopNav