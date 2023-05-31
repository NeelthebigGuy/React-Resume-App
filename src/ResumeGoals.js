import { useState } from "react";
import "./App.css";

function ResumeGoals(){

    const [ResumeToggleState, setResumeToggleState] = useState(false);

    const ResumeToggleTab = (ResumeToggleState) => {
        setResumeToggleState(!ResumeToggleState);
    };

    return(
        <div className="tab-content-block">
            <button 
                className={ResumeToggleState === true ? 'resume-button resume-button-active' : 'resume-button'}
                onClick={() => ResumeToggleTab(ResumeToggleState)}
                >
                Goals                        
                </button>
                            <hr/>

                            <div className={ResumeToggleState === true ? 'resume-content-p resume-content-p-active' : 'resume-content-p'}>
                                <p>
                                    &emsp;A summer student looking to get his foot in the door of the "computerworld"! While working for a bussiness that is focused
                                around computers, I hope to gain lots of expereince that i can apply at future jobs. 
                                </p>
                            </div>
        </div>

    );
};

export default ResumeGoals;