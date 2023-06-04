import React, {useState, useEffect} from "react";
import PropType from 'prop-types';

import "./App.css";
import './animation/animation.css';

function ResumeSkills(){

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
                    &emsp;Experienced in all aspects of computer maintenance and operation (hardware and software),
                    disassembly and reassembly of various brands, installation and upgrading of operating systems. 
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
                Skills                        
                </button>
                            <hr/>

                            <div className={ResumeToggleState === true ? 'resume-content-p resume-content-p-active' : 'resume-content-p'}>
                                
                                <Fader/>

                            </div>
        </div>

    );
};

export default ResumeSkills;