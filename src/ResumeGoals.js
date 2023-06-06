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
        

        if(ResumeToggleState){
            return (
                <div className={fadeProp.fade}>
                
                    {text}
                
                </div>
                
            );
        }
        else{
        return (
            <div/>
        );
        }
    }
    
    Fader.defaultProps = {
        text:   <p>
                    A Computer Science university student seeking to gain real world expirence in the information technology industry.
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
                Goal                      
                </button>
                            <hr/>

                            <div className={ResumeToggleState === true ? 'resume-content-p-active' : ' '}>
                                <Fader/>
                            </div>
                            
        </div>

    );
};

export default ResumeGoals;