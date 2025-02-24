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
function Home() {
    return (
        <>
            <LandingPage />
            <Second />
            <CompanyMarquee />
            <Third />
            <Fourth />
            <StatsSection />
            <Fifth />
            <Sixth />
            <TestimonialCard />
            <Sixth2 />
            <Seventh />
            <Eightth />
            <Nine />
        </>
    )
}

export default Home
