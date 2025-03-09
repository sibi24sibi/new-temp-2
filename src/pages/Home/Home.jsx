import React from 'react'
import LandingPage from "./Components/LandingPage"
import Second from "./Components/Second"
import Third from "./Components/Third"
import Fourth from './Components/Fourth'
import Fifth from './Components/Fifth'
import Sixth from './Components/Sixth'
import Sixth2 from './Components/Sixth2'
import Seventh from './Components/Seventh'
import Eightth from './Components/Eightth'
import Nine from './Components/Nine'
import { CompanyMarquee } from './Components/CompanyMarquee'
import StatsSection from './Components/FeaturesMarquee'
import TestimonialCard from './Components/Feedback'
import Footer from '@/components/Footer/Footer'
import GetInTouch from './Components/GetInTouch'
import { OtherCompany } from '../Company/OtherCompany'
function Home() {
    return (
        <div className='home fixed h-[calc(100vh-72px)] bottom-0 overflow-y-auto w-full pt-16 md:pt-0'>
            <LandingPage />
            <CompanyMarquee />
            <Second />
            <OtherCompany />.
            <TestimonialCard />
            <Third />
            <StatsSection />
            <Fourth />
            <Fifth />
            {/* <Sixth />
            <Sixth2 /> */}
            <Seventh />
            <Eightth />
            <Nine />
            <GetInTouch />
            <Footer />

        </div>
    )
}

export default Home
