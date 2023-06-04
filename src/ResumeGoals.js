import React, {useState, useEffect} from "react";
import PropType from 'prop-types';

import "./App.css";
import './animation/animation.css';


function ResumeGoals(){

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
                    &emsp;A summer student looking to get his foot in the door of the "computerworld"! While working for a bussiness that is focused
                    around computers, I hope to gain lots of expereince that i can apply at future jobs. 
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
                Goals                        
                </button>
                            <hr/>

                            <div className={ResumeToggleState === true ? 'resume-content-p resume-content-p-active' : 'resume-content-p'}>
                                <Fader/>
                            </div>
                            
        </div>

    );
};

export default ResumeGoals;