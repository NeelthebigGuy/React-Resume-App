import React, {useState, useEffect} from "react";
import PropType from 'prop-types';

import "./Links.css";
import '../animation/animation.css';



function Links(){
    
    const [toggleLinkInfo, setToggle] = useState(false);

    const ToggleLink = (toggleLinkInfo) => {
        setToggle(!toggleLinkInfo)
    }

    const Fader = ({ text }) => {

        const [fadeProp, setFadeProp] = useState({
            fade: 'fade-out',
        });
    
        useEffect(() => {
                if(toggleLinkInfo){
                setFadeProp({
                    fade: 'fade-in'
                })
                }
            
                if(!toggleLinkInfo){
                    setFadeProp({
                        fade: 'fade-out'
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
                    bready#7653
                </p>
    }
    
    Fader.propTypes = {
        text: PropType.string,
    }

    return(
        <div className='link-content'>

            <div className="consideration"> &emsp; </div>

            <h2>Links</h2>
            <hr/>
            
            <div className='link-group'>
                <div className='link-group-item'>
                    
                    <a href="https://github.com/NeelthebigGuy">
                    <img className="github-img-link-style" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt='' width={'100'} height={'100'}></img>
                    </a>

                </div>
                <div className='link-group-item'>
                    
                        <button 
                        className='discord-button'
                        onClick={() => ToggleLink(toggleLinkInfo)}>
                        <img className="github-img-link-style" src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg" alt='' width={'100'} height={'100'}></img>
                        </button>
                    
                        <div className={'discord-info-active'}>
                            
                            <Fader/>

                        </div>
                </div>
                <div className='link-group-item'>
                    
                    <a href="https://www.linkedin.com/in/neel-khiroya-71a177239?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8tN5Ou9RSxCBC5f0mLtD%2Fw%3D%3D">
                    <img className="github-img-link-style" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt='' width={'100'} height={'100'}></img>
                    </a>

                </div>
            </div>

        </div>
    );
}

export default Links;