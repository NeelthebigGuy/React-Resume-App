import { useState } from "react";
import Goals from './ResumeGoals';
import Skills from './ResumeSkills';
import Education from './ResumeEducation';
import Expereince from './ResumeExpereince';

import "./App.css";

function Tabs(){

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    };

    return (
        <div className="tab-container">
            
            <div className="tab-block">
                <button 
                className={toggleState === 1 ? 'tab active-tab-resume' : 'tab'}
                onClick={() => toggleTab(1)}
                >
                Resume
                </button>

                <button className={toggleState === 2 ? 'tab active-tab-links' : 'tab'}
                    onClick={() => toggleTab(2)}
                    >
                    Links
                </button>

                <button className={toggleState === 3 ? 'tab active-tab-extra' : 'tab'}
                    onClick={() => toggleTab(3)}    
                    >
                    Extras
                </button>
            </div>

            <div className="tabs-content">
                <div
                className={toggleState === 1 ? "tab-content tab-content-active" : "tab-content"}>
                    <h2>Resume</h2>
                    <hr/>

                    <div className="tab-block-under-resume">
                        
                            <Goals/>
                        

                            <Skills/>
                    </div>
                    <div className="tab-block-under-resume">
                        
                        <Education/>
                        
                        <Expereince/>

                    </div>
                    <a href="https://docs.google.com/document/d/1ElMY1HpTh34T16xPBFMsBGQAdYYCjq8L/edit?usp=drive_link&ouid=103309383396972031349&rtpof=true&sd=true">
                        <p className="resume-download-style">Click here to download my Resume</p>
                    </a>
                </div>

                <div
                className={toggleState === 2 ? "tab-content tab-content-active" : "tab-content"}>
                    <h2>Links</h2>

                    <a href="https://github.com/NeelthebigGuy">
                    <img className="github-img-link-style" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt='' width={'100'} height={'100'}></img>
                    </a>
                
                </div>
            </div>
        </div>
    );
}

export default Tabs;