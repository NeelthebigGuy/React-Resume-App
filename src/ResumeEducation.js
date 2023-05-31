import { useState } from "react";
import "./App.css";

function ResumeEducation(){

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
                Education                        
                </button>
                            <hr/>

                            <div className={ResumeToggleState === true ? 'resume-content-p resume-content-p-active' : 'resume-content-p'}>
                                <p>
                                    &emsp;Currently Enrolled in the Bachelor Of Applied Computer Science program at Acadia University (2 out of 4 years completed)
                                </p>
                            </div>
        </div>

    );
};

export default ResumeEducation;