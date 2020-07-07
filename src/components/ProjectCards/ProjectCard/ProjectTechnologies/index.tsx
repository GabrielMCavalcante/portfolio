import React from 'react'

// Components
import ProjectTechnology from './ProjectTechnology'

// CSS styles
import './styles.css'

interface Props {
    technologies: string[]
}

function ProjectTechnologies(props: Props) {
    return (
        <div className="ProjectTechnologies">
            {props.technologies.map((tech, i) => <ProjectTechnology key={i} technology={tech} />)}
        </div>
    )
}

export default ProjectTechnologies