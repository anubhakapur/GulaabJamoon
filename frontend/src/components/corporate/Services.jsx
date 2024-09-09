import React from 'react';
import { Plane, Users, MessageCircle, PieChart, Mic, Laptop, Palette, Gift, Video } from 'lucide-react';

const ServiceItem = ({ icon: Icon, title, description }) => (
  <div className="mb-8">
    <div className="flex items-center mb-2">
      <Icon className="w-6 h-6 mr-2 text-yellow-500" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Travel & Logistics Support",
      description: "Finding the perfect retreat location and ensuring safe travel for your team is crucial. Sit back and relax, while we take care of everything!"
    },
    {
      icon: Users,
      title: "Registation Management",
      description: "Getting everyone's RSVPs is seamless with our custom built registration platform."
    },
    {
      icon: MessageCircle,
      title: "Attendee Communication",
      description: "Our team will be active in Slack as well as managing a dedicated inbox to serve as the main point of contact."
    },
    {
      icon: PieChart,
      title: "Budget & Expense Tracking",
      description: "You'll have 24/7 access to your trip's budget, including all invoices and receipts, and receive updates every step of the way."
    },
    {
      icon: Mic,
      title: "Meetings & A/V Production",
      description: "We'll work with your team to contract, negotiate, and organize A/V for all your meeting and business centre needs."
    },
    {
      icon: Laptop,
      title: "Custom Trip Websites",
      description: "With an in-house web designer, we can design a website to manage registration, agenda details, flight bookings, and FAQs."
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Moniker has an in-house graphics team that can design and ensure consistent branding across all communication mediums and in-hand collateral."
    },
    {
      icon: Gift,
      title: "Room Drops & Gifting",
      description: "We will assist with the sourcing and design of unique and functional swag and/or gifting for your attendees both before or during the trip."
    },
    {
      icon: Video,
      title: "Video Production",
      description: "We can create a professionally produced trip video, filmed throughout the entire event to capture all the memories and shared experiences."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-sm uppercase tracking-wider text-gray-500 mb-2">OUR SERVICES</h2>
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-4">What We Can Help You With</h1>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;