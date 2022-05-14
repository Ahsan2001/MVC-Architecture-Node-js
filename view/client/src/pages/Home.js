import React from 'react';
import Banner from '../Components/Class Components/Banner';
import AboutSection from '../Components/Class Components/AboutSection';
import CustomStaffing from '../Components/Class Components/CustomStaffing';
import ExperiencedAndInnovation from '../Components/Class Components/ExperiencedAndInnovation';
import ContactSection from '../Components/Functional Components/ContactSection';


function Home() {
    return (
        <React.Fragment>
             <Banner />    
             <AboutSection />
             <CustomStaffing />
             <ExperiencedAndInnovation/>
             <ContactSection />
        </React.Fragment>
    )
}

export default Home;