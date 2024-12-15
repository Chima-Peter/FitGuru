import { useState } from 'react';
import { motion } from 'motion/react'
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";


import img from '../../../assets/images/group_image.webp'
import icon from '../../../assets/images/icon.svg'


const Reviews = () => {
    const [reviews, setReviews] = useState([
        {
          name: "John Doe",
          review: "Great gym with a variety of equipment and excellent trainers. I've seen a big improvement in my fitness journey.",
          rating: 5
        },
        {
          name: "Emily Smith",
          review: "The gym is clean and well-maintained, but it gets a little crowded during peak hours.",
          rating: 4
        },
        {
          name: "Michael Brown",
          review: "Love the atmosphere here, but I wish there were more group classes available in the evenings.",
          rating: 3
        },
        {
          name: "Sophia Johnson",
          review: "Friendly staff and great location, but some of the equipment could use updating.",
          rating: 4
        },
        {
          name: "David Wilson",
          review: "Not a fan of the membership pricing. There are more affordable options with similar facilities.",
          rating: 2
        },
        {
          name: "Sarah Lee",
          review: "Amazing place to work out. The trainers are very professional and motivating!",
          rating: 5
        },
        {
          name: "Chris Taylor",
          review: "Decent gym overall. The amenities are good, but parking is a challenge.",
          rating: 3
        },
        {
          name: "Emma White",
          review: "The personal training sessions are top-notch. Worth every penny!",
          rating: 5
        }
      ])

      // State to control the horizontal position of the slider
  const [shift, setShift] = useState(0);

  // State to track the index of the next review to be moved to the left
  const [leftIndex, setLeftIndex] = useState(0);

  // Function to shift elements to the left
  const shiftLeft = () => {
    setShift((prev) => prev - 250); // Move the slider to the left

    // Move the first element to the end of the array
    setReviews((prevReview) => [...prevReview, prevReview[leftIndex]]);

    // Update the left index (reset to 0 if it exceeds array length)
    setLeftIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to shift elements to the right
  const shiftRight = () => {
    if (shift < 0) {
      setShift((prev) => prev + 250); // Move the slider to the right
    }
  };

      
    return (
        <section className="flex flex-col gap-4 mt-8" id='reviews'>
            <h4 className="text-[16px] xl:text-xl 2xl:text-2xl font-light opacity-70 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[130px] 2xl:px-[160px]">
                Reviews
            </h4>
            <div className="flex md:flex-row md:justify-between w-[100%] flex-col gap-8 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-[130px] 2xl:px-[160px]">
                <h4 className="text-4xl uppercase font-extrabold">
                From You
                </h4>
                <button className="w-fit flex gap-1 items-center py-2 px-6 bg-black text-white text-center text-sm rounded-lg self-end">
                  <FaPlus className="w-2 h-2" />
                    <p>
                      Give Review
                    </p>
                </button>
            </div>
            <div className="flex lg:justify-between gap-4 mt-8 flex-col lg:flex-row justify-center lg:items-center">
                <img src={img} alt="Give us a review today!" className='z-10 backdrop-blur-3xl sm:pl-6 md:pl-10 lg:pl-14 xl:pl-[130px] 2xl:pl-[160px]' />
                <div className='flex flex-col gap-4 px-4'>
                    {/* Slider Container */}
                    <motion.div
                        className="flex gap-4 flex-wrap lg:flex-nowrap justify-between"
                        animate={{ x: shift }} // Animate the horizontal position
                        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
                    >
                        {/* Render each review as a card */}
                        {reviews.map((review, index) => (
                            <div key={`${review.review}-${index}`} className='flex flex-col gap-4 py-4 px-4 w-[100%] md:w-[48%] lg:w-[250px] xl:w-[300px] 2xl:w-[350px] h-[200px] xl:h-[250px] rounded-xl shadow-lg bg-white border border-gray-200'>
                                <div className='flex w-[100%] justify-between'>
                                    <h4 className='text-lg xl:text-xl 2xl:text-2xl font-bold'>
                                        {review.name}
                                    </h4>
                                    <img src={icon} alt="FitGuru" className='w-12 h-12' />
                                </div>
                                <p className='text-sm xl:text-[18px] 2xl:text-[22px] font-light leading-relaxed'>
                                    {review.review}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="lg:flex gap-6 hidden">
                        {/* Shift Right Button */}
                        <button
                        
                        onClick={shiftRight}
                        >
                        <div className=' border border-black rounded-full p-1 hover:text-white hover:bg-black'>
                            <LuChevronLeft className="w-6 h-6" />
                        </div>
                        </button>
                        {/* Shift Left Button */}
                        <button
                        
                        onClick={shiftLeft}
                        >
                        <div className=' border border-black rounded-full p-1 hover:text-white hover:bg-black'>
                            <LuChevronRight className="w-6 h-6" />
                        </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews