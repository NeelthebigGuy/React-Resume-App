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

    function buttonClick(index){
        setToggleState(index)
        window.open("https://drive.google.com/file/d/19m2Zoy3LlhsNEddvEOfEcRjs6nphYwBB/view?usp=sharing", "_blank", "noreferrer");
    }
    return (
        <div className="tab-container">
            
            <div className="tab-block">
                <button 
                className={toggleState === 1 ? 'tab active-tab-resume' : 'tab'}
                onClick={() => toggleTab(1)}
                >
                    Online Resume
                </button>

                <button className={toggleState === 2 ? 'tab active-tab-extra' : 'tab'}
                    onClick={() => buttonClick(toggleState)}    
                    >
                    Download Resume
                </button>

                <button className={toggleState === 3 ? 'tab active-tab-links' : 'tab'}
                    onClick={() => toggleTab(3)}
                    >
                    Links
                </button>

            </div>

            <div className="tabs-content">
                <div
                className={toggleState === 1 ? "tab-content tab-content-active" : "tab-content"}>

                    <div className="consideration">
                        Please take some time to review this personal website that I created using react.js
                    </div>

                    <h2>Neel Khiroya Resume</h2>
                    
                    <p className="resume-email-style">
                        A Computer Science student looking to gain expirence for my future career
                    </p>
                    <hr/>

                    <button className="resume-button" onClick={() => window.location = 'mailto:nkhiroya33@gmail.com'}>Email Me</button>

                    <div className="resume-email-line"/>

                    <div className="tab-block-under-resume">
                        
                            <Goals/>
                        

                            <Skills/>
                    </div>
                    <div className="tab-block-under-resume">
                        
                        <Education/>
                        
                        <Expereince/>

                    </div>
                </div>


                <div
                className={toggleState === 3 ? "tab-content tab-content-active" : "tab-content"}>

                    <Links/>
                
                </div>


            </div>
        </div>
    );
}

export default Tabs;