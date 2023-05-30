import { useState } from "react";
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
                        <p>
                            HERE
                        </p>
                </div>
            </div>

        </div>
    );
}

export default Tabs;