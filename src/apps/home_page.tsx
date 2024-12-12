import { Link } from "react-router-dom"
import { motion } from 'motion/react'

import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";

import home_img1 from '../assets/images/home_main.webp'
import HomeList from "../components/ui/home_list";

import WhyChooseUs from "../components/ui/why_choose_us";
import trainers from '../assets/images/trainer.svg'
import facility from '../assets/images/facility.svg'
import membership from '../assets/images/membership.svg'
import operating from '../assets/images/operating.svg'
import upImg from '../assets/images/up_rectangle.webp'
import lowerImg from '../assets/images/lower_rectangle.webp'
import longImg from '../assets/images/long_rectangle.webp'

import trainer1 from '../assets/images/trainer1.webp'
import trainer2 from '../assets/images/trainer2.webp'
import trainer3 from '../assets/images/trainer3.webp'
// import meet1 from '../assets/images/meet_mentor1.webp'
// import meet2 from '../assets/images/meet_mentor2.webp'
import PricingPlan from "../components/ui/pricing_plan";
import Reviews from "../components/ui/reviews";
import { childVariants, containerVariants } from "../components/lib/motion";

import footer_img from '../assets/images/footer_img.webp'


const HomePage = () => {
  const why_choose_us = [
    {
      header: 'Trainer Qualifications',
      text: 'Our trainers are certified professionals with a wealth of experience in fitness, health, and nutrition.',
      image: trainers
    },
    {
      header: 'Membership Costs',
      text: "We offer flexible membership plans to accommodate all fitness levels and budgets.",
      image: membership
    }, {
      header: 'Facility Amenities',
      text: "Our gym is equipped with state-of-the-art machines, free weights, and cardio equipment to help you reach your fitness goals. ",
      image: facility
    },
    {
      header: 'Operating Hours',
      text: "We are open seven days a week from 5:00 AM to 10:00 PM to accommodate your busy schedule.",
      image: operating
    }
  ]

  const trainersList = [
    {
      name: "Marcus Johnson",
      specialty: "Strength Training",
      bio: "Marcus is a certified personal trainer with over 8 years of experience helping clients build strength and confidence. His dynamic approach combines functional movements and weight training for lasting results.",
      image: trainer1
    },
    {
      name: "Jared Thompson",
      specialty: "Athletic Performance",
      bio: "Jared focuses on enhancing athletic performance through agility, speed, and power training. With a background in sports coaching, he works with athletes of all levels to improve their game.",
      image: trainer3
    },
    {
      name: "Darius Smith",
      specialty: "High-Intensity Interval Training (HIIT)",
      bio: "Darius is known for his high-energy HIIT workouts that push clients to their limits. With a background in sports science, he designs programs that boost endurance and burn calories effectively.",
      image: trainer2
    }
  ];

  

  return (
    <main className="flex flex-col gap-16 font-main overflow-hidden" id="home">
      <motion.section
         className="flex flex-col gap-0"
         variants={containerVariants}
         initial='hidden'
         animate="visible">
        <section className="flex justify-between gap-6 flex-col lg:flex-row">
          <div className="py-12 w-[100%] lg:w-[50%] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[130px] 2xl:px-[160px] flex flex-col gap-6 xl:gap-8 2xl:gap-10 pt-32">
            <motion.h1 
              className="uppercase text-5xl font-extrabold xl:text-[64px]"
              variants={childVariants}>
              Elevate your workout
            </motion.h1>
            <motion.p 
              variants={childVariants}
              className="text-[16px] font-light tracking-wide xl:text-[20px] 2xl:text-[24px]">
              Welcome to FitGuru, where your fitness journey begins! Whether you're looking to build strength, improve endurance, or find your balance, our state-of-the-art facilities, expert trainers, and supportive community are here to help you achieve your goals. Let's make fitness a way of life—together!
            </motion.p>
            <motion.button 
              type="button" 
              variants={childVariants}
              className='bg-black w-fit rounded-xl xl:text-[24px] hover:shadow-lg text-white text-[16px] py-3 px-8 font-normal'>
              Get Started
            </motion.button>
            <div className="flex gap-6">
              <Link to="https://www.linkedin.com/in/chimaojimma/" target="_blank">
                <SlSocialFacebook className="w-5 h-5 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10" />
              </Link>
              <Link to="https://www.linkedin.com/in/chimaojimma/" target="_blank">
                <FaInstagram className="w-5 h-5 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10" />
              </Link>
              <Link to="https://x.com/mobi_unbothered" target="_blank">
                <FaXTwitter className="w-5 h-5 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10" />
              </Link>
              <Link to="https://www.linkedin.com/in/chimaojimma/" target="_blank">
                <FaLinkedinIn className="w-5 h-5 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10" />
              </Link>
            </div>
          </div>
          <div className="bg-[#1F1F1F] w-[100%] lg:w-[30%] relative flex items-end">
            <motion.img
              variants={childVariants}
              src={home_img1} 
              alt="START WORKING OUT TODAY" className="lg:absolute lg:-left-32 xl:static" />
          </div>
        </section>
        <motion.div
           className="w-[100%] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[130px] 2xl:px-[160px] flex justify-between py-10 xl:py-12  bg-black flex-wrap gap-y-6 sm:gap-y-8" 
           id="about"
           variants={childVariants}>
          <HomeList header="500+" firstParagraph="Happy Members" secondParagraph="Our community is growing fast" />
          <HomeList header="5+" firstParagraph="Year Experience" secondParagraph="Experience in various workouts" />
          <HomeList header="13+" firstParagraph="Certified Trainers" secondParagraph="Guidance at every step" />
          <HomeList header="90%" firstParagraph="Customer Satisfaction" secondParagraph="We ensure your steady progress" />
        </motion.div>
      </motion.section>


      <section className="flex flex-col gap-12 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[130px] 2xl:px-[160px]">
        <section className="flex flex-col gap-4 items-center">
          <h2 className="text-4xl tracking-wide font-extrabold xl:text-[52px]">
            Why Choose Us
          </h2>
          <p className="opacity-65 text-center text-[16px] xl:text-[20px] 2xl:text-[24px] font-light">
          At FitGuru, we go beyond just fitness. Our state-of-the-art facilities, personalized training programs, and supportive community are designed to help you achieve your health and fitness goals. Whether you're a beginner or a seasoned athlete, our certified trainers offer expert guidance and motivation tailored to your needs. 
          </p>
        </section>
        <section className="flex justify-between w-[100%] flex-wrap mt-8 gap-y-12">
          <div className="flex flex-wrap lg:w-[50%] w-[100%] justify-between gap-y-4 lg:gap-y-0">
            {
              why_choose_us.map((value) => (
                <WhyChooseUs key={value.header} header={value.header} text={value.text} image={value.image} />
              ))
            }
          </div>
          <div className="flex gap-0 w-[100%] lg:w-[45%] justify-center">
            <div className="hidden flex-col gap-2 md:flex">
              <motion.img 
                whileInView={{ opacity: 1 }} 
                initial={{ opacity: 0.4 }} 
                viewport={{ amount: 0.2, once: false }} 
                transition={{ duration: 1 }} 
                src={upImg} alt="Train with us" className="hover:scale-110" />
              <motion.img 
                whileInView={{ opacity: 1 }} 
                initial={{ opacity: 0.4 }} 
                viewport={{ amount: 0.2, once: false }} 
                transition={{ duration: 1 }} 
                src={lowerImg} alt="Gym setup" className="hover:scale-110" />
            </div>
            <motion.img 
              whileInView={{ opacity: 1 }} 
              initial={{ opacity: 0.4 }} 
              viewport={{ amount: 0.2, once: false }} 
              transition={{ duration: 1 }} 
              src={longImg} alt="Gym equipments" className="lg:w-[285px] lg:scale-110 l:hover:scale-125 md:w-[50%] w-[100%]" />
          </div>
        </section>
      </section>


      <section className="flex flex-col gap-12 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[130px] 2xl:px-[160px]" id="trainers">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-3xl sm:text-4xl tracking-wide font-extrabold xl:text-[52px]">
            Meet Our Trainers
          </h2>
          <p className="opacity-65 text-center text-[16px] xl:text-[20px] 2xl:text-[24px] font-light">
          Our team of professional trainers is dedicated to helping you achieve your fitness goals. With years of experience, each trainer brings a unique set of skills, knowledge, and passion to guide you through personalized workouts. Whether you're new to fitness or looking to challenge yourself, our trainers will provide the motivation, expertise, and support to help you succeed on your fitness journey. Get to know them and discover how their experience can transform your workout routine!
          </p>
        </div>
        <div className="w-[100%] flex justify-center flex-wrap gap-6 lg:gap-0 lg:flex-nowrap lg:justify-between 2xl:justify-center xl:gap-12 2xl:gap-32">
          {
            trainersList.map((trainer) => (
              <motion.div 
                className="w-fit flex rounded-xl shadow-2xl flex-col relative" 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2, once: false }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                key={trainer.name}>
                <img src={trainer.image} alt={trainer.name} className="rounded-t-xl border border-gray-300 opacity-60 w-[100%] md:w-[300px] xl:w-[400px] 2xl:w-[450px]" />
                <div className="flex flex-col gap-2 w-[100%] md:w-[300px] xl:w-[400px] 2xl:w-[450px] p-4 hover:backdrop-blur-sm backdrop-blur-sm lg:backdrop-blur-none rounded-xl">
                  <p className="font-semibold text-lg">
                    {trainer.name}
                  </p>
                  <p className="text-[15px] font-light">
                    {trainer.bio}
                  </p>
                </div>
              </motion.div>
            ))
          }
        </div>
        {/* <div className="w-[100%] flex justify-between mt-8 lg:mt-16 xl:justify-center xl:gap-16 2xl:gap-32 xl:mt-16">
          <div className="lg:flex md:flex-row flex-col gap-4 hidden">
            <img src={meet1} alt="Join us today" className="w-[200px] h-[350px]" />
            <img src={meet2} alt="Join us today" className="w-[350px] h-[350px]" />
          </div>
          <div className="flex flex-col gap-4 w-[100%] lg:w-[600px] py-2">
            <h3 className="text-xl uppercase">
              Are you looking for a mentor?
            </h3>
            <h3 className="text-4xl uppercase font-bold">
              coaches
            </h3>
            <p className="opacity-65 text-[16px] xl:text-[20px] 2xl:text-[24px] font-light">
              Achieving your fitness goals can feel challenging, but with the right mentor by your side, anything is possible. Our experienced trainers are more than just fitness experts—they're dedicated mentors ready to guide, motivate, and support you at every step. Whether you're starting your fitness journey or striving to reach new heights, let us help you unlock your full potential and transform your ambitions into accomplishments.
            </p>
            <button type="button" className='bg-black w-fit rounded-lg xl:text-[24px] hover:shadow-lg text-white text-[16px] py-2 px-10 font-normal'>
              Explore Now
            </button>
          </div>
        </div> */}
      </section>

      <PricingPlan />


      <Reviews />

      <motion.section 
        whileInView={{ opacity: 1 }} 
        initial={{ opacity: 0.4 }} 
        viewport={{ amount: 0.2, once: false }} 
        transition={{ duration: 1 }} 
        className="flex flex-col gap-12 relative">
        <div 
          className="items-center w-[100%] flex flex-col gap-4 text-white justify-center py-16 px-4"
          style={{
            backgroundImage: `url(${footer_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <p className="text-sm xl:text-[16px] 2xl:text-[20px] font-light">
            Call us Today
          </p>
          <h5 className="text-4xl font-semibold xl:text-5xl">
            +234-807-531-0346
          </h5>
          <p className="text-[16px] xl:text-[18px] 2xl:text-[22px] font-extralight opacity-60 md:w-[80%] lg:w-[70%] text-center">
            Our team is ready to answer your questions and help you get started on your fitness journey. Call us now to learn more about our programs, membership options, and facilities. Let’s achieve your goals together!
          </p>
        </div>
      </motion.section>
    </main>
  )
}

export default HomePage
