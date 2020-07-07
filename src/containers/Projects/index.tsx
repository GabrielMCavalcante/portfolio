import React from 'react'

// Components
import ProjectCards from 'components/ProjectCards'

// CSS styles
import './styles.css'

const projects = [
    { 
        imageURL: 'https://picsum.photos/300', 
        title: 'Notes', 
        description: 'Create and edit personal annotations', 
        technologies: ['Vue', 'Vuex', 'Vuetify'],
        demoLink: 'https://notes-5cf6a.firebaseapp.com',
        sourceLink: 'https://github.com/GabrielMCavalcante/notes-firebase-app'
    }
]

function Projects() {
    return (
        <div className="Projects">
            <h2>My Projects</h2>
            <ProjectCards projects={projects}/>
        </div>
    )
}

export default Projects