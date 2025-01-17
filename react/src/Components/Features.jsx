import React from 'react'
import img11 from '../../src/assets/feature-section1-dottedrows.png'
import img1 from '../../src/assets/feature-section1-dottedrows.png'
import img2 from '../../src/assets/payment-suite.png'
import checkicon from '../../src//assets/tick.png'

const Features = () => {
  return (
   <section className='relative w-full bg-white pb-[12rem] pt-[10rem]'>

    <img 
    class="absolute -top-[8rem] left-[10rem] inline-block -z-[100] ml-[600px] 
    md:block"
    src={img11} alt=""  loading='lazy' width={233} height={167} />
    
    <div className='w-11/12 max-w-[1080px] mx-auto relative'>
        {/* Heading */}
        <h2 className='font-mullish text-center text-2xl leading-[1.2] font-bold
        text-deepBlue'>Accept Payments with Razorpay Payment Suite</h2>
        <div className='w-6 h-1 bg-greenLight mx-auto mt-4 mb-6'></div>

        {/* Content Box */}
        <div className='w-full min-h-[520px] bg-white flex rounded-md relative
        p-10 py-12 border'>
            {/* left Section */}
            <div className='flex flex-col justify-between w-full'>
            <h3 className='font-mullish text-[28px] leading-10 font-bold
            max-w-[500px]'>
                Supercharge your business with the all‑powerful
                <span class="text-lightBlue">Payment Gateway</span>
            </h3>
            {/* List Items */}
            <ul className='space-y-6 mt-8'>
                {[
                    "100+ Payment Methods",
                    "Industry Leading Success Rates",
                    "Superior Checkout Experience",
                    "Easy to Integrate",
                    "Instant Settlements from day 1",
                    "In-depth Reporting and Insights"
                ].map((item, i) => (
                    <li key={i} className='flex items-center space-x-3'>
                        <img src={checkicon} alt="check" className='w-5 h-5' />
                        <span className='font-mullish text-lg text-grayText'>
                        {item}
                        </span>
                    </li>
                ))}
            </ul>

            {/* Buttons  */}
            <div className=' flex items-center space-x-4 mt-10'>
                <button className='bg-lightBlue text-white py-3 px-6 rounded-md
                font-mullish font-bold hover:bg-lightBlue500 transition-all
                duration-200'>Sign UP Now</button>
               
                <div className='flex items-center cursor-pointer group'>
                    <a href="#" className='font-mullish font-bold text-lightBlue
                    group-hover:text-grayText transition-all duration-200
                    '>Know More</a>
                    <i className='fas fa-chevron-right text-lightBlue 
                    group-hover:text-grayText ml-2'></i>
                </div>
            </div>
            

            {/* Right Section - Image */}
            <img src={img2} className=' absolute right-0 bottom-0 w-[60%] max-w-[600px]
            ' alt="" />
        </div>
    </div>


    </div>
   </section>
  )
}

export default Features
