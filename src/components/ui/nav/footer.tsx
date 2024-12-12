import { HashLink as NavLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

import icon from '../../../assets/images/icon.svg'
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl'

const Footer = () => {
  return (
    <footer className="flex flex-col gap-24 font-main w-[100%] border-t border-t-gray-200 pt-12 pb-2 md:gap-12 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[130px] 2xl:px-[160px]">
      <section className='flex gap-8 lg:gap-24 xl:gap-28 2xl:gap-32 w-[100%] flex-wrap'>
        <div className='flex flex-col gap-4'>
          <img src={icon} alt="FitGuru" className='w-[100px]' />
          <p className='text-[16px] font-light w-[100%] lg:w-[350px] opacity-60 leading-relaxed'>
            At FitGuru, your fitness goals are our priority. Whether you're taking the first step or pushing toward new personal bests, we're here to support you every step of the way. Join us today and let’s make fitness a lifestyle!
          </p>
        </div>
        
        <ul className='flex flex-col gap-2 mr-16 lg:mr-0'>
          <h6 className='text-lg xl:text-xl 2xl:text-2xl font-semibold'>
            Menu
          </h6>
          <NavLink className='hover:font-normal hover:opacity-100 text-[15px] font-light opacity-60' to="#home">
            Home
          </NavLink>
          <NavLink className='hover:font-normal hover:opacity-100 text-[15px] font-light opacity-60' to="#about">
            About
          </NavLink>
          <NavLink className='hover:font-normal hover:opacity-100 text-[15px] font-light opacity-60' to="#trainers">
            Trainers
          </NavLink>
          <NavLink className='hover:font-normal hover:opacity-100 text-[15px] font-light opacity-60' to="#plans">
            Plans
          </NavLink>
          <NavLink className='hover:font-normal hover:opacity-100 text-[15px] font-light opacity-60' to="#reviews">
            Reviews
          </NavLink>
        </ul>

        <ul className='flex flex-col gap-4'>
          <h6 className='text-lg xl:text-xl 2xl:text-2xl font-semibold'>
            Social Media
          </h6 >
          <Link to="https://www.linkedin.com/in/chimaojimma/" target='_blank' className='flex hover:font-medium font-light hover:opacity-100 gap-2 items-center opacity-60'>
            <SlSocialFacebook className='w-4 h-4 xl:w-6 xl:h-6' />
            <p className='text-sm xl:text-[16px]'>
              Facebook
            </p>
          </Link>
          <Link to="https://www.linkedin.com/in/chimaojimma/" target='_blank' className='flex hover:font-medium font-light hover:opacity-100 gap-2 items-center opacity-60'>
            <SlSocialInstagram className='w-4 h-4 xl:w-6 xl:h-6' />
            <p className='text-sm xl:text-[16px]'>
              Instagram
            </p>
          </Link>
          <Link to="https://x.com/mobi_unbothered" target='_blank' className='flex hover:font-medium font-light hover:opacity-100 gap-2 items-center opacity-60'>
            <SlSocialTwitter className='w-4 h-4 xl:w-6 xl:h-6' />
            <p className='text-sm xl:text-[16px]'>
              Twitter
            </p>
          </Link>
          <Link to="https://www.linkedin.com/in/chimaojimma/" target='_blank' className='flex hover:font-medium font-light hover:opacity-100 gap-2 items-center opacity-60'>
            <SlSocialLinkedin className='w-4 h-4 xl:w-6 xl:h-6' />
            <p className='text-sm xl:text-[16px]'>
              LinkedIn
            </p>
          </Link>
        </ul>
      </section>
      <p className='text-xs opacity-60 tracking-wide self-center font-bold'>
        &copy; 2023 FitGuru. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
