import React from 'react'
import './Skills.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkMarkIconLight.png'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext'
function Skills() {
    //const{theme,toggleTheme}=useTheme();

    // const checkMarkIcon = theme === light ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section className='skillsContainer' id="skills">
        <h1 className='sectionTitle'>&lt; Skills /&gt;</h1>
        <div className="skillList">
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="JavaScript"/>
        </div>
        <hr/>
        <div className="skillList">
            <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
            <SkillList src={checkMarkIcon} skill="ReactJS"/>
            <SkillList src={checkMarkIcon} skill="Redux"/>
        </div>
        <hr/>
        <div className="skillList">
            <SkillList src={checkMarkIcon} skill="React-Router-DOM"/>
            <SkillList src={checkMarkIcon} skill="C++"/>
            <SkillList src={checkMarkIcon} skill="SQL"/>
        </div>
        <hr/>
        <div className="skillList">
            <SkillList src={checkMarkIcon} skill="Git"/>
            <SkillList src={checkMarkIcon} skill="GitHub"/>
            <SkillList src={checkMarkIcon} skill="DSA"/>
        </div>
        <hr/>
      
    </section>
  )
}

export default Skills
