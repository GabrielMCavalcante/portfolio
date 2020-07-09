import React, { useEffect, useState } from 'react'

// Axios instance
import axios from 'axios-config'

// Components
import ProjectCards from 'components/ProjectCards'
import Spinner from 'components/UI/Spinner'

// CSS styles
import './styles.css'

interface Document {
    fields: {
        imageURL: { stringValue: string },
        minifiedImageURL: { stringValue: string },
        title: { stringValue: string },
        description: { stringValue: string },
        technologies: { arrayValue: { values: { stringValue: string }[] } },
        demoLink: { stringValue: string },
        sourceLink: { stringValue: string }
    }
}

interface Project {
    imageURL: string,
    minifiedImageURL: string,
    title: string,
    description: string,
    technologies: string[],
    demoLink: string,
    sourceLink: string
}

function Projects() {

    const [projects, setProjects] = useState<Project[]>()

    useEffect(() => {
        async function fetchProjects() {
            const response = await axios.get('/projects')
            const documents: Document[] = response.data.documents
            const parsedProjects: Project[] = []
            documents.forEach(doc => {
                parsedProjects.push({
                    imageURL: doc.fields.imageURL.stringValue,
                    minifiedImageURL: doc.fields.minifiedImageURL.stringValue,
                    title: doc.fields.title.stringValue,
                    description: doc.fields.description.stringValue,
                    technologies: doc.fields.technologies.arrayValue.values.map(value => value.stringValue),
                    demoLink: doc.fields.demoLink.stringValue,
                    sourceLink: doc.fields.sourceLink.stringValue
                })
            })
            setProjects(parsedProjects)
        }
        fetchProjects()
    }, [])

    return (
        <div className="Projects">
            <h2>My Projects</h2>
            {!projects && <Spinner />}
            {projects && <ProjectCards projects={projects} />}
        </div>
    )
}

export default Projects