import React from 'react';
import { Instagram, Linkedin, Youtube, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const teamMembers = [
    { name: "Mohin", linkedIn: "https://www.linkedin.com/in/johndoe" },
    { name: "Simran", linkedIn: "https://www.linkedin.com/in/janesmith" },
    { name: "Anubha", linkedIn: "https://www.linkedin.com/in/alexjohnson" },
    { name: "Madhav", linkedIn: "https://www.linkedin.com/in/emilybrown" },
    { name: "Navish", linkedIn: "https://www.linkedin.com/in/chrislee" }
  ];

  return (
    <footer className="bg-black text-white"> {/* Changed from bg-gray-900 to bg-gray-900 */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <img src="/path-to-rosanisa-logo.png" alt="Rosanisa Xperiences LLP" className="h-12 mb-4" />
            <p className="text-sm text-blue-300">
              GJ Experiences is a subsidiary registered under ROSANISA XPERIENCES LLP (Bangalore, India)
            </p>
            <a href="#" className="text-sm text-blue-300 hover:underline block">Click here to subscribe our newsletter</a>
            <div className="flex space-x-4 mt-4">
              <img src="/path-to-ministry-logo.png" alt="Ministry of Tourism" className="h-10" />
              <img src="/path-to-karnataka-logo.png" alt="Karnataka Tourism" className="h-10" />
              <img src="/path-to-kstdc-logo.png" alt="KSTDC" className="h-10" />
            </div>
          </div>

          {/* Contacts and Timings */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-500">Contacts and Timings</h3>
            <p className="text-sm">Office Hours:<br />10 AM to 08 PM (IST)<br />Mondays to Saturdays</p>
            <p className="text-sm">Telephone: <a href="tel:+917007162269" className="text-blue-300 hover:underline">+917007162269</a></p>
            <p className="text-sm">Email: business@gulaabjamoon.com</p>
          </div>

          {/* India Registered Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-500">India Registered Address</h3>
            <p className="text-sm">NO 3 K NO 620 Begur Hobli<br />Akshay Nagar<br />Bangalore Karnataka<br />India 574212</p>
            <p className="text-sm">LLP Identification No.: ACE-2203<br />GSTIN: AA290124094020M</p>
          </div>

          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-500">About Us</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="text-blue-300 hover:underline">Who is Gulaab Jamoon</a></li>
              <li><a href="#" className="text-blue-300 hover:underline">Travel Styles</a></li>
              <li><a href="#" className="text-blue-300 hover:underline">Team GJ</a></li>
              <li><a href="#" className="text-blue-300 hover:underline">Testimonials</a></li>
            </ul>
          </div>

          {/* GJ Company Policy */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-500">GJ Company Policy</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="text-blue-300 hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-300 hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="text-blue-300 hover:underline">Refund Policy</a></li>
              <li><a href="#" className="text-blue-300 hover:underline">Responsible Travel Policy</a></li>
              <li><a href="#" className="text-blue-300 hover:underline">Anti-Slavery and Human Trafficking Policy</a></li>
              <li><a href="#" className="text-blue-300 hover:underline">Anti-Corruption and Bribery Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-12 flex flex-wrap justify-between">
          {/* GJ Helpline & Support */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-yellow-500 mb-4">GJ Helpline & Support</h3>
            <ul className="text-sm space-y-2">
              <li><a href="tel:+917869926687" className="text-blue-300 hover:underline">+91-7869926687</a></li>
              <li><a href="tel:+919972368454" className="text-blue-300 hover:underline">+91-9972368454</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-yellow-500 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Youtube size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={24} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <div className="text-sm">© 2024 ROSANISA XPERIENCES LLP</div>
        </div>
      </div>

      {/* Website by section */}
      <div className="bg-gray-900 py-3 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-xs">
          <span className="text-gray-400 mr-4">Website by:</span>
          <div className="flex flex-wrap">
            {teamMembers.map((member, index) => (
              <React.Fragment key={member.name}>
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white hover:underline"
                >
                  {member.name}
                </a>
                {index < teamMembers.length - 1 && <span className="mx-2 text-gray-400">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;