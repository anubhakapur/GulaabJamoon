import React from 'react'
import Header from '../components/Header.jsx'
import backgroundImage from "/src/assets/images/bg-main-test2.jpg";
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
    return (
        <div>
            <Header />
            <HeroCorporate backgroundImage={backgroundImage} />
            <Meet />
            <ManageRetreat />
            < WhatHelp />
            <PastExamples />
            <Complimentary/>
            <Services/>
            <Process/>
            <Form/>
        </div>
    )
}

export default Corporate
