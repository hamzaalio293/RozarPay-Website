import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import paymentLinkIcon from '../assets/payment-link-icon.svg';
import paymentPageIcon from '../assets/payment-pages-icon.svg';
import paymentButtonIcon from '../assets/payment-buttons-icon.svg';
import subscriptionIcon from '../assets/subscriptions-icon.svg';
import routeIcon from '../assets/route-icon.svg';
import smartCollectIcon from '../assets/smart-collect-icon.svg';
import paymentIcon from '../assets/features-wave.svg';


const FeatureCards = () => {
  const features = [
    {
      title: "Payment Links",
      description: "Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately",
      icon: paymentLinkIcon,
    },
    {
      title: "Payment Pages",
      description: "Take your store online instantly with zero coding. Accept international & domestic payments",
      icon: paymentPageIcon,
    },
    {
      title: "Payment Buttons",
      description: "Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more",
      icon: paymentButtonIcon,
    },
    {
      title: "Subscriptions",
      description: "Subscription plans with automated recurring transactions on various payment modes.",
      icon: subscriptionIcon,
    },
    {
      title: "Route",
      description: "Split incoming payments auto- matically to vendor's accounts, manage marketplace money flow...",
      icon: routeIcon,
    },
    {
      title: "Smart Collect",
      description: "Automatically reconcile incoming NEFT, RTGS, IMPS, UPI payments using Virtual Accounts & UPI-IDs",
      icon: smartCollectIcon,
    },
  ];

  return (
    <section className="relative w-full bg-white py-20">
      <div className="w-11/12 max-w-[1080px] mx-auto">
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-mullish">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              {/* White Glow Effect */}
              <div className="absolute inset-0 bg-white rounded-md blur-lg transition-all duration-200 opacity-0 group-hover:opacity-100 -z-10 group-hover:scale-110"></div>

              {/* Gray Border Animation Effect */}
              <div className="absolute inset-0 border-3 border-gray-200/20 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div>

              {/* Background Circle */}
              <div className="absolute top-0 right-0 h-[70px] w-[70px] bg-lightBlue rounded-full transform translate-x-[40%] -translate-y-[40%] z-[0] border-[6px] border-white group-hover:scale-105 transition-transform duration-200">
                <div className="h-full w-full flex items-center justify-center">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-10 h-10 invert brightness-0" 
                  />
                </div>
              </div>

              {/* Card with diagonal cut */}
              <div className='relative z-[1] p-8 bg-white cursor-pointer 
              hover:shadow-xl transition-all duration-200 transform 
              group-hover:translate-y-[-5px] group-hover:scale-[1.02]'
              style={{
                clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%, 0 0)'
              }}
              >
                {/* Card Content */}
                <div className='relative'>
                    <div className='w-12 h-12 mb-4'>
                        <img 
                        src={feature.icon} alt="" />
                    </div>
                    <h3 className='font-mullish text-xl font-bold text-deepBlue
                    mb-4'>
                        {feature.title}
                    </h3>
                    <p className='font-mullish text-grayText mb-6'>
                        {feature.description}
                    </p>

                    <div className='flex items-center cursor-pointer group/link'>
                    <a href="#"
                    className='font-mullish font-bold text-lightBlue 
                    group-hover/link:text-lightBlue500 transition-all duration-200'
                    >
                        Know More
                    </a>
                    <MdKeyboardArrowRight className='text-lightBlue text-xl ml-2 
                    group-hover:text-lightBlue500 transition-all duration-200' />
                </div>

                {/* Wave image */}
                <img src={paymentIcon} alt=""
                className='absolute right-0 bottom-4 text-lightBlue500 text-2xl
                opacity-0 group-hover:opacity-100 transition-all duration-200' 
                />
                </div>

                {/* Hover line effect */}
                <div className='absolute botom-0 right-0 w-0 h-1 bg-gradient-to-r
                from-lightBlue to-lightBlue500 group-hover:w-full transition-all
                duration-200'>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards; 