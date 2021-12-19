import React from 'react'
import './project-card.css'
    function ProjectCard({project}) {
    return (
        <div className='project-card'>
            <div className="project-info">
                <label className='project-title'>{project.title}</label>
                <div className="project-links">
                    {project.demo&& ( <a href={project.demo} className='rpject-link'>
                        <div className='link-button'>
                        <i class="fas fa-globe"></i> Demo</div></a>)}
                        {project.github&&( <a href={project.github} className='rpject-link'>
                        <div className='link-button'>
                        <i class="fab fa-github"></i>GitHub</div></a>)}
                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags.map((tag)=>{
                        return <label className="tag">{tag}</label>;
                    })}
                </div>
            </div>
            <img src={project.image} alt="" className='project-photo'/>
        </div>
    )
}

export default ProjectCard;
