import React from 'react';
import Header from './header01';
import {ProfileSection} from './profile-section';
import {SidePanelLeft01} from './side-panel-left01';
import {SidePanelLeft02} from "@/components/component/side-panel-left02";


const Homepage = () => {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex' }}>
                <SidePanelLeft01 />
                <ProfileSection />
                <SidePanelLeft02 />
            </div>
        </div>
    );
};

export default Homepage;
