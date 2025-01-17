import React from 'react';
import FeatureCard from './FeatureCard';
import rocketIcon from '../assets/instant-activation-icon.svg';
import integrationIcon from '../assets/easy-integration.svg';
import apiIcon from '../assets/api-driven-icon.svg';
import paymentIcon from '../assets/payment-modes.svg';
import supportIcon from '../assets/industry-support-icon.svg';
import dashboardIcon from '../assets/dashboard-reporting-icon.svg';
import secureIcon from '../assets/secure-icon.svg';
import pricingIcon from '../assets/simple-pricing.svg';

const FeatureContext = () => {
  const features = [
    {
      icon: rocketIcon,
      title: "Instant Activation",
      description: "Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation."
    },
    {
      icon: integrationIcon,
      title: "Easy Integration",
      description: "With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour."
    },
    {
      icon: apiIcon,
      title: "API Driven",
      description: "Build your business for scale with our complete API-driven automation that requires zero manual intervention."
    },
    {
      icon: paymentIcon,
      title: "100+ payment modes",
      description: "Offer your customers the luxury of all payment modes including Credit/Debit cards, Netbanking, UPI, Wallets etc."
    },
    {
      icon: pricingIcon,
      title: "Simple Pricing",
      description: "Our innovative payment solutions with competitive pricing make payments simpler."
    },
    {
      icon: supportIcon,
      title: "Best in Industry Support",
      description: "Always available email, phone and chat based support to help you in your every step."
    },
    {
      icon: dashboardIcon,
      title: "Dashboard Reporting",
      description: "Real-time data and insights on your Razorpay Dashboard to make informed business decisions."
    },
    {
      icon: secureIcon,
      title: "Secure",
      description: "PCI DSS Level 1 compliant solution which removes your burden of regulatory compliance."
    }
  ];

  return (
    <div className="features-section py-20 bg-blue-700">
      <div className="container mx-auto px-4  ">
        <div className="features-content">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl font-bold  mb-6">Features</h2>
            <div className="w-20 h-1 bg-green-400 mx-auto mb-6 "></div>
            <p className=" text-white max-w-2xl mx-auto text-lg">
              Empower your business with all the right tools to accept online payments and provide the best customer experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-7xl mx-aut  m-auto ">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureContext;
