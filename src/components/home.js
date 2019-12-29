import React from 'react'
import MainLayout from './main-layout'
import './css/home.css'
import TopSection from './sections/TopSection'
import AboutSection from './sections/AboutSection'
import AboutSectionReverse from './sections/AboutSectionReverse'
import Location from './sections/Location'
import EventSection from './sections/EventSection'
import Competition from './sections/CompetitionSection'

// const Home = React.createClass({
//     render: function() {
//         return (
//             <div className="home-page">
//                 <h1>Home</h1>
//             </div>
//         );
//     }
// });

class Home extends React.Component {
    render() {
        return (
            <div>
            <MainLayout>
            <TopSection/>
            <AboutSection/>
            <AboutSectionReverse/>
            <EventSection/>
            {/* <Competition/> */}
            <Location/>
            </MainLayout>
            </div>
        )
    }
}
export default Home;