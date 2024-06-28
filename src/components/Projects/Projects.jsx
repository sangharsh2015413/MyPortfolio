import React from 'react'
import  './Projects.css'
import LawVistaHub from '../../assets/LawVistaHub.jpg'
import ProjectCard from '../../common/ProjectCard'
import ToDo from '../../assets/ToDo.jpg'
import Password from '../../assets/Password.jpg'

function Projects() {
  return (
    <section id='projects' className='projectContainers'>
      <h1 className='sectionTitle'>	&lt; Projects /&gt;</h1>
      <div className='projectsContainer'>
        <ProjectCard 
         src={LawVistaHub}
         link="https://github.com/sangharsh2015413/SIH-23"
         h3="LawVistaHub"
         p="Lawyer App"
         />
         <ProjectCard 
         src={ToDo}
         link="https://github.com/sangharsh2015413/todoAppLocalStorage"
         h3="ToDo"
         p="ToDo App"
         />
         <ProjectCard 
         src={Password}
         link="https://github.com/sangharsh2015413/passwordgenerator"
         h3="PasswordGenerator"
         p="Password Generator App"
         />
      </div>
    </section>
  )
}

export default Projects
