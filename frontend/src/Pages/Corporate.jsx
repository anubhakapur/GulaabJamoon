import React, { useRef } from 'react';
import Header from '../components/Header.jsx';
import backgroundImage from "/src/assets/images/corporate.jpg";
import HeroCorporate from '../components/corporate/HeroCorporate.jsx';
import Meet from '../components/corporate/Meet';
import ManageRetreat from '../components/corporate/ManageRetreat';
import WhatHelp from '../components/corporate/WhatHelp';
import PastExamples from '../components/corporate/PastExamples';
import Complimentary from '../components/corporate/Complimentary';
import Services from '../components/corporate/Services.jsx';
import Form from '../components/corporate/Form.jsx';
import Process from '../components/corporate/Process';

const Corporate = () => {
  const formRef = useRef(null); // Ref for the Form component
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to Form component
  };
  return (
    <div>
      <Header />
      <HeroCorporate backgroundImage={backgroundImage} formRef={formRef} /> {/* Pass formRef if needed in HeroCorporate */}
      <Meet />
      <ManageRetreat />
      <WhatHelp scrollToForm={scrollToForm}  />
      <PastExamples />
      <Complimentary scrollToForm={scrollToForm}/>
      <Services />
      <Process />
      {/* Use formRef only for the Form */}
      <div ref={formRef}>
        <Form />
      </div>
    </div>
  );
};

export default Corporate;
