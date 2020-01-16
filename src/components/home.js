import React from 'react'
import MainLayout from './main-layout'
import './css/home.css'
import TopSection from './sections/TopSection'
import About from './sections/AboutSection'
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
            <CFooter/>
            </MainLayout>
            </div>
        )
    }
}
export default Home;