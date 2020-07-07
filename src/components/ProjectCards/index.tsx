import React from 'react'

// Components
import ProjectCard from './ProjectCard'

// CSS styles
import './styles.css'

interface Props {
    projects: {
        imageURL: string,
        minifiedImageURL: string,
        title: string,
        description: string,
        technologies: string[],
        demoLink: string,
        sourceLink: string
    }[]
}

function ProjectCards(props: Props) {
    const projectCards: JSX.Element[] = []
    
    props.projects.forEach((project, i) => {
        projectCards.push(<ProjectCard key={i} project={project}/>)    
    })

    return (
        <div className="ProjectCards">
            { projectCards }
        </div>
    )
}

export default ProjectCards