import React from 'react'

// Components
import ProjectTechnology from './ProjectTechnology'

interface Props {
    technologies: string[]
}

function ProjectTechnologies(props: Props) {
    return (
        <div className="ProjectTechnologies">
            {props.technologies.map(tech => <ProjectTechnology technology={tech} />)}
        </div>
    )
}

export default ProjectTechnologies