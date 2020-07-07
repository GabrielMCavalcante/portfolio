import React, { useState } from 'react'

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
        minifiedImageURL: string,
        title: string,
        description: string,
        technologies: string[],
        demoLink: string,
        sourceLink: string
    }
}

function ProjectCard(props: Props) {

    const [classes, setClasses] = useState(["ProjectCard", "Initial"])
    const [image, setImage] = useState(props.project.imageURL)
    const [notSet, setNotSet] = useState(true)
    const isMinified = document.getElementsByClassName('ProjectInfo').item(0) ? false : true

    if(notSet && isMinified) {
        setNotSet(false) 
        setImage(props.project.minifiedImageURL)
    }

    function toggleCard() {
        const oldClasses = [...classes]
        if (oldClasses.includes('Minified') || oldClasses.includes('Initial')) {
            oldClasses.pop()
            setImage(props.project.imageURL)
        }
        else { 
            oldClasses.push('Minified') 
            setImage(props.project.minifiedImageURL)
        }
        setClasses(oldClasses)
    }

    function checkMinified() { 
        if (classes.includes('Minified') || 
        (classes.includes('Initial') && isMinified)) 
            toggleCard() 
    }

    return (
        <div className={classes.join(' ')} onClick={checkMinified}>
            <div className="CardToggler" onClick={toggleCard}><FiChevronDown /></div>
            <div className="ProjectImage" style={{ backgroundImage: `url(${image})` }}>
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