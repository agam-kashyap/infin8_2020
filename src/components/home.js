import React from 'react'
import MainLayout from './main-layout'
import './css/home.css'
import TopSection from './sections/TopSection'
import About from './sections/AboutSection'
import Location from './sections/Location2'
import Competition from './sections/Competition'
import CFooter from './sections/Footer'

class Home extends React.Component {
    render() {
        return (
            <div>
            <MainLayout>
            <TopSection/>
            <About/>
            <Competition/>
            {/* <Location/> */}
            <CFooter/>
            </MainLayout>
            </div>
        )
    }
}
export default Home;