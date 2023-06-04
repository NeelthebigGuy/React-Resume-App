import { useState } from "react";

import Goals from './ResumeGoals';
import Skills from './ResumeSkills';
import Education from './ResumeEducation';
import Expereince from './ResumeExpereince';
import Links from './link_tab/Links';
import Extras from './link_extra/Extra';


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
                    <p className="resume-email-style">
                        A Computer Science student looking to gain expirence for my future career
                    </p>
                    <hr/>

                    <p className="resume-email-style">
                        Contact me at nkhiroya33@gmail.com
                    </p>
                    <div className="resume-email-line"/>

                    <div className="tab-block-under-resume">
                        
                            <Goals/>
                        

                            <Skills/>
                    </div>
                    <div className="tab-block-under-resume">
                        
                        <Education/>
                        
                        <Expereince/>

                    </div>
                    <a href="https://drive.google.com/file/d/19m2Zoy3LlhsNEddvEOfEcRjs6nphYwBB/view?usp=sharing">
                        <p className="resume-download-style">Click here to download my Resume</p>
                    </a>
                </div>


                <div
                className={toggleState === 2 ? "tab-content tab-content-active" : "tab-content"}>

                    <Links/>
                
                </div>


                <div
                className={toggleState === 3 ? "tab-content tab-content-active" : "tab-content"}>

                    <Extras/>

                </div>
            </div>
        </div>
    );
}

export default Tabs;