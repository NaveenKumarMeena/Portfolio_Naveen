import React from 'react'
import './skills.css'
import Separator from '../../reusable/separator'
import { SkillsData } from '../../data/skills'
import SkillCard from './skills-card';
function Skills() {
    const data=SkillsData;
    return (
        <div id='skills' className='skills'>
            <Separator/>
            <label className="section-title">Skills</label>
            <div className='skills-container'>
                {data.map((item)=>{
                    return (
                        <div className="skills-section">
                            <label className='skills-section-title'>{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill)=>{
                                    return (
                                        <SkillCard skill={skill}/>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
