import React from 'react'
import { ProjectData } from '../../data/projects'
import ProjectCard from './project-card';
import Separator from '../../reusable/separator';
import './projects.css'

function Projects() {
    const data=ProjectData;
    return (
        <div id='project' className='projects'>
            <Separator/>
            <label className='section-title'>Projects</label>
            <div>
                {data.map((project)=>{
                    return <ProjectCard project={project}/>
                })}
            </div>
        </div>
    )
}

export default Projects
