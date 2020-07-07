import React from 'react'

// Icons
import { FiChevronDown } from 'react-icons/fi'

// Components
import ProjectTechnologies from './ProjectTechnologies'
import Button from 'components/UI/Button'

// CSS styles
import './styles.css'

interface Props {
    project: {
        imageURL: string,
        title: string,
        description: string,
        technologies: string[],
        demoLink: string,
        sourceLink: string
    }
}

function ProjectCard(props: Props) {
    return (
        <div className="ProjectCard">
            <div className="CardToggler"><FiChevronDown /></div>
            <div className="ProjectImage">
                <img src={props.project.imageURL} alt={"Project " + props.project.title} />
            </div>
            <div className="ProjectInfo">
                <h2>{props.project.title}</h2>
                <h3>{props.project.description}</h3>
            </div>
            <div className="ProjectTech">
                <ProjectTechnologies technologies={props.project.technologies} />
            </div>
            <div className="CardActions">
                <Button redirectTo={props.project.demoLink}>Test Demo</Button>
                <Button redirectTo={props.project.sourceLink}>View Source</Button>
            </div>
        </div>
    )
}

export default ProjectCard