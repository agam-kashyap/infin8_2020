import React from 'react'
import MainLayout from './main-layout'
import './css/home.css'
import TopSection from './sections/TopSection'
import About from './sections/AboutSection'
import AboutSectionReverse from './sections/AboutSectionReverse'
import Location from './sections/Location'
import EventSection from './sections/EventSection'
import Competition from './sections/Competition'
import CFooter from './sections/Footer'

class Home extends React.Component {
    render() {
        return (
            <div>
            <MainLayout>
            <TopSection/>
            <About/>
            <About/>
            <About/>
            <Competition/>
            <Location/>
            <CFooter/>
            </MainLayout>
            </div>
        )
    }
}
export default Home;