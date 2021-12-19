import React from 'react'
import { CertificateData } from '../../data/certificate'
import CertificateCard from './certificate-card';
import Separator from '../../reusable/separator';
import './certificate.css'

function Certificate() {
    const data=CertificateData;
    return (
        <div id='certificate' className='projects'>
            <Separator/>
            <label className='section-title'>Certificate</label>
            <div>
                {data.map((project)=>{
                    return <CertificateCard project={project}/>
                })}
            </div>
        </div>
    )
}

export default Certificate
