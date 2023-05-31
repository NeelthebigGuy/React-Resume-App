import { useState } from "react";
import "./App.css";

function ResumeSkills(){

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
                Skills                        
                </button>
                            <hr/>

                            <div className={ResumeToggleState === true ? 'resume-content-p resume-content-p-active' : 'resume-content-p'}>
                                <p>
                                    &emsp;Experienced in all aspects of computer maintenance and operation (hardware and software),
                                    disassembly and reassembly of various brands, installation and upgrading of operating systems. 
                                </p>
                            </div>
        </div>

    );
};

export default ResumeSkills;