import React from 'react'
import img from '../assets/logo.svg'


const Navbar = () => {
  return (
    <nav className='bg-deepBlue'>
        <div className='relative w-10/12 md:w-11/12 max-w-[1080px] mx-auto flex
        items-center justify-between
        '>
            {/* logo */}
            <a href="/" className='cursor-pointer py-7 pr-7 block'>
                <img src={img} alt="" className='w-30 h-7' />
            </a>

            {/* Links */}
           <ul className='hidden gap-5 lg:flex'>
                <li className=' text-white relative font-inherit py-7 hover:text-lightBlue
                cursor-pointer transition-all duration-200 group 
                '>
                <a href="#" className='text-lg'>Payments</a>
                
                </li>

                <li className=' text-white relative font-inherit py-7 hover:text-lightBlue
                cursor-pointer transition-all duration-200 
                '>
                <a href="#" className='text-lg'>Banking</a>
               
                </li>

                <li className=' text-white relative font-inherit py-7 hover:text-lightBlue
                cursor-pointer transition-all duration-200 
                '>
                <a href="#" className='text-lg'>Corporate Card</a>
                </li>

                <li className=' text-white relative font-inherit py-7 hover:text-lightBlue
                cursor-pointer transition-all duration-200 
                '>
                <a href="#" className='text-lg'>Payroll</a>
                </li>

                <li className=' text-white relative font-inherit py-7 hover:text-lightBlue
                cursor-pointer transition-all duration-200 
                '>
                <a href="#" className='text-lg'>Resources</a>
                </li>

                <li className=' text-white relative font-inherit py-7 hover:text-lightBlue
                cursor-pointer transition-all duration-200 
                '>
                <a href="#" className='text-lg'>Support</a>
                </li>

                <li className=' text-white relative font-inherit py-7 hover:text-lightBlue
                cursor-pointer transition-all duration-200 
                '>
                <a href="#" className='text-lg'>Pricing</a>
                </li>
           </ul>

           {/* Buttons */}
           <button
              class="py-3 rounded px-5 text-white font-inherit text-sm font-bold border-2 border-lightBlue"
            >
              Log in
            </button>
            <button
              class="py-3 px-4 font-inherit rounded-sm text-sm font-bold bg-white text-lightBlue300 border transition-all duration-200 hover:text-lightBlue500 hidden lg:flex"
            >
              Sign Up<svg
                viewBox="0 0 24 24"
                focusable="false"
                class="w-[14px] h-[14px] ml-2 my-1"
              >
                <path
                  fill="currentColor"
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                ></path>
              </svg>
            </button>
        </div>
    </nav>
  )
}

export default Navbar
