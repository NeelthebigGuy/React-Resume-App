import React, {useState, useEffect} from "react";
import PropType from 'prop-types';

import "./App.css";
import './animation/animation.css';

function ResumeEducation(){

    const [ResumeToggleState, setResumeToggleState] = useState(false);

    const ResumeToggleTab = (ResumeToggleState) => {
        setResumeToggleState(!ResumeToggleState);
    };

    const Fader = ({ text }) => {

        const [fadeProp, setFadeProp] = useState({
            fade: 'fade-out',
        });
    
        useEffect(() => {

                if(ResumeToggleState === true){
                setFadeProp({
                    fade: 'fade-in'
                })
            }
            
            return () => {}
        }, [fadeProp])
    
        return (
            <div className={fadeProp.fade}>
            
                {text}
            
            </div>
            
        );
    }
    
    Fader.defaultProps = {
        text:   <p>
                    &emsp;Currently Enrolled in the Bachelor Of Applied Computer Science program at Acadia University (2 out of 4 years completed)
                </p>
    }
    
    Fader.propTypes = {
        text: PropType.string,
    }

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
                                
                                <Fader/>

                            </div>
        </div>

    );
};

export default ResumeEducation;