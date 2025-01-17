import React from 'react'
import img from '../assets/Screenshot 2023-02-13 122544.png'
import img2 from '../assets/fake-company-logo.png'



const Taskbar = () => {
  return (
    <div className='max-w-7xl mx-auto px-8 py-12 relative'>
       
       {/* Header Section */}
       <div className='text-center mb-16'>
            <h1 className='text-[#1a237e] text-4xl font-bold mb-2'>
             An Experience</h1>
             <h2 className='text-[#1a237e] text-3xl font-semibold'>
             People Love to Talk About
             </h2>
             <div className='w-16 h-1 bg-teal-400 mx-auto mt-4'></div>
       </div>

       {/* Testimonial Slider */}
       <div className='flex items-center justify-between my-8 gap-8'>
        {/* Previous Button */}
          <button className='w-14 h-14 rounded-full bg-blue-50 shadow-md flex
          items-center justify-center text-3xl hover:bg-blue-100 text-blue-800'>
            &#8249;
          </button>

          {/* Testimonial Card */}
          <div className='flex gap-12 p-10 bg-white rounded-xl shadow-xl max-w-4xl'>
              {/* Image Section */}
              <div className='flex-none w-2/5'>
                  <img 
                  src={img} alt=""
                  className='w-full  object-cover rounded-xl' />
              </div>

              {/* Conten Section */}
              <div className='flex-1 relative pt-8'>
                {/* Quote Mark */}
                <div className='absolute -top-2 left-4 text-8xl text-gray-200
                font-serif leading-none'>
                    " 
                </div>
                {/* Testimonial Content */}
                <h3 className='text-[#1a237e] text-3xl font-bold leading-tight
                mb-6'>
                  Readymade Closed Wallet Solution For Quick Refunds</h3>
                  <a href="#" className='text-teal-500 font-medium 
                  hover:text-teal-600 inline-block mb-8'>
                    Learn More
                  </a>

                  {/* Author Info */}
                  <div className='mt-auto'>
                    <h4 className='text-4xl font-bold mb-1'>Lorem Ipsum</h4>
                    <p className='text-gray-600 mb-4'>
                      CEO, XYZ Engineering Company</p>
                    <div className=' w-16 h-16 rounded-lg flex items-center
                    justify-center'>
                      <img src={img2} alt=""
                      />
                    </div>
                  </div>
              </div>
          </div>

          {/* Next Button */}
          <button className='w-14 h-14 rounded-full bg-blue-50 shadow-md flex
          items-center justify-center text-3xl hover:bg-blue-100 text-blue-800'>
            &#8250;
          </button>
       </div>

       {/* Slider Dots */}
       <div className='flex justify-center gap-3 mt-12'>
        <span className='w-3 h-3 rounded-full bg-gray-200 cursor-pointer'></span>
        <span className='w-3 h-3 rounded-full bg-blue-600 cursor-pointer'></span>
        <span className='w-3 h-3 rounded-full bg-gray-200 cursor-pointer'></span>
        <span className='w-3 h-3 rounded-full bg-gray-200 cursor-pointer'></span>
        <span className='w-3 h-3 rounded-full bg-gray-200 cursor-pointer'></span>
        <span className='w-3 h-3 rounded-full bg-gray-200 cursor-pointer'></span>
       </div>
    </div>
  )
}

export default Taskbar
