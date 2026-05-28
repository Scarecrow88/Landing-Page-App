import React from 'react';
import NavBar from './components/navBar.jsx';
import MainContent from './components/main.jsx';
import Slider from './components/slider.jsx';
import Features from './components/feature.jsx';
import StatsSection from './components/stats.jsx';
import CallToAction from './components/callToAction.jsx';
import Footer from './components/footer.jsx';
function App () {
    return (
        <div className="bodybox">
            <NavBar/>
            <MainContent/>
            <Slider/>
            <Features/>
            <StatsSection/>
            <CallToAction/>
            <Footer/>
        </div>
    );
}
export default App;