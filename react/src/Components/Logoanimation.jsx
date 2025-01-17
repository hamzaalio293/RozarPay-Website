import React from 'react'
import companies from '../assets/comanies.png';


const Logoanimation = () => {
  return (
    <div className='flex justify-between items-center p-16 min-h-[600px]
    w-4/5 mx-auto'>

      {/* Left side text content */}
        <div className=' text-centent flex-1 max-w-[600px] pr-10'>
          <h1 className='heading text-4xl text-[#02042A] mb-6 leading-tight'>
            The 50,00,000+ businesses using Razorpay</h1>
          <p className='text-base text-[#4F5578] mb-5 leading-relaxed'>
            We make it easier for you to focus on building great products while we work
            on simplifying your payments. Become one of us by joining thousands of our
            happy users and simplify the online payment experience for your customers</p>
          <p className='sub-text text-base text-[#4F5578] leading-relaxed'>
            Focus on your business while we handle the complexities of payments for you</p>
        </div>


        {/* Right side animation */}
        <div className='logo-animation-container flex-1 h-[600px] relative   overflow-hidden max-w-[800px]'>
            <div className='logo-column absolute animate-scroll-down flex flex-col
              gap-5 w-full'>
                <div className='logo-item flex items-center justify-center p-5'>
                  <img src={companies} alt="" className='max-w-[800px] w-full
                  h-auto object-contain bg-transparent' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Logoanimation
