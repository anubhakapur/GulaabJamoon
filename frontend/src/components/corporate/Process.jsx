import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  {
    title: 'Intro Call',
    description: "Every program begins with a phone call. We'll discuss your objectives, ask a few questions, and maybe even throw around a few ideas to begin.",
    icon: '📞'
  },
  {
    title: 'Proposal',
    description: "We'll send you a detailed proposal outlining our plan to meet your objectives.",
    icon: '📄'
  },
  {
    title: 'Refinement',
    description: "We'll work together to refine the proposal until it perfectly fits your needs.",
    icon: '🔍'
  },
  {
    title: 'Execution',
    description: "Once approved, we'll execute the plan, keeping you updated throughout the process.",
    icon: '🚀'
  },
  {
    title: 'Review',
    description: "After completion, we'll review the results together and discuss any follow-up steps.",
    icon: '📊'
  }
];

const backgroundColors = [
  'bg-teal-950',
  'bg-teal-800',
  'bg-teal-600',
  'bg-teal-400',
  'bg-white'
];

const Process = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [bgColor, setBgColor] = useState(backgroundColors[0]);

  useEffect(() => {
    setBgColor(backgroundColors[currentStep]);
  }, [currentStep]);

  const goToNextStep = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const goToPrevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const textColor = currentStep === steps.length - 1 ? 'text-teal-950' : 'text-white';

  return (
    <div className={`relative min-h-screen flex flex-col justify-center items-center p-8 transition-colors duration-500 mb-8 ${bgColor}`}>
      <div className={`max-w-4xl w-full mx-auto ${textColor}`}>
        <h2 className="text-4xl font-bold mb-8 text-center">How It Works</h2>
        <div className="relative">
          <button 
            onClick={goToPrevStep} 
            className={`absolute left-8 top-1/2 transform -translate-y-1/2 bg-black/20 p-2 rounded-full ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/30'}`}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="text-white w-8 h-8" />
          </button>
          <button 
            onClick={goToNextStep} 
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 p-2 rounded-full ${currentStep === steps.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/30'}`}
            disabled={currentStep === steps.length - 1}
          >
            <ChevronRight className="text-white w-8 h-8" />
          </button>
          <div className="text-center px-16">
            <div className="text-7xl mb-6">{steps[currentStep].icon}</div>
            <h3 className="text-3xl font-semibold mb-4">
              Step {currentStep + 1}: {steps[currentStep].title}
            </h3>
            <p className="text-xl">{steps[currentStep].description}</p>
          </div>
        </div>
        <div className="mt-12 flex justify-center space-x-3">
          {steps.map((_, index) => (
            <div 
              key={index} 
              className={`w-3 h-3 rounded-full ${index === currentStep ? 'bg-current' : 'bg-current opacity-30'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;