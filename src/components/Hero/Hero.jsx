import React from 'react'
import './Hero.css'
import heroImg from '../../assets/Profile.jpg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitterLight.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/githubLight.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedinLight.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/SangharshNewResume.pdf'
import { useTheme } from '../../common/ThemeContext'


function Hero() {
    const{theme, toggleTheme} = useTheme();

    const themeIcon = theme==='light' ? sun : moon;
    const twitterIcon = theme==='light' ? twitterLight : twitterDark;
    const githubIcon = theme==='light' ? githubLight : githubDark;
    const linkedinIcon = theme==='light' ? linkedinLight : linkedinDark;
    



  return (
    <div className='container'>
      <div className='colorModeContainer'>
        <img className='hero' src={heroImg} alt="Profile" />
        <img className='colorMode' src={themeIcon} alt="Color Mode Icon" onClick={toggleTheme} />
     </div>
     <div className='info'>
        <h1>Sangharsh
        <br />
        Singh
        </h1>
        <h2>Frontend Web Developer</h2>
        <span>
          <a href='https://x.com/princeti_singh' target='_blank'>
          <img src={twitterIcon} alt="Twitter Icon" />
          </a> 
          <a href='https://github.com/sangharsh2015413' target='_blank'>
          <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href='https://www.linkedin.com/in/sangharsh-singh-23b018198/' target='_blank'>
          <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a> 
        </span>
        <p className='discription'> <span className='about'> I speak fluent JavaScript, and my favorite word is 'function'.</span> <br /> With a passion for developing modern React web apps for commercial businesses. <br /> 
        Seeking to enrich your team with a dynamic, code-sorcerer? Hire Me  and let's transform challenges into triumphs. </p>   
        
        <a href={CV} target='_blank'>
        <button className='hover'>Resume</button>
        </a>
     </div>
    </div>
  )
}

export default Hero
