import React from 'react'

// Components
import ProjectCards from 'components/ProjectCards'

// Images
import notes from 'assets/notes-project.png'
import notesMinified from 'assets/notes-project-minified.png'
import tictactoe from 'assets/tictactoe-project.png'
import tictactoeMinified from 'assets/tictactoe-project-minified.png'
import statisticsAnswerChecker from 'assets/statistics-answer-checker-project.jpg'
import statisticsAnswerCheckerMinified from 'assets/statistics-answer-checker-project-minified.jpg'

// CSS styles
import './styles.css'

const projects = [
    { 
        imageURL: notes,
        minifiedImageURL: notesMinified, 
        title: 'Notes', 
        description: 'A Vue - Firebase app in which the user can create, edit and delete personal annotations', 
        technologies: ['Vue', 'Vuex', 'Vuetify'],
        demoLink: 'https://notes-5cf6a.firebaseapp.com',
        sourceLink: 'https://github.com/GabrielMCavalcante/notes-firebase-app'
    },
    { 
        imageURL: tictactoe,
        minifiedImageURL: tictactoeMinified, 
        title: 'Tic Tac Toe', 
        description: 'A React project where you can play the famous game Tic Tac Toe', 
        technologies: ['React', 'Redux', 'Typescript'],
        demoLink: 'https://gabrielmcavalcante.github.io/TicTacToe/#/',
        sourceLink: 'https://github.com/GabrielMCavalcante/TicTacToe'
    },
    { 
        imageURL: statisticsAnswerChecker,
        minifiedImageURL: statisticsAnswerCheckerMinified, 
        title: 'Statistics Answer Checker', 
        description: 'A React app that helps students check statistics exercises answers', 
        technologies: ['React', 'Router', 'Typescript', 'Papaparse'],
        demoLink: 'https://gabrielmcavalcante.github.io/statistics-answer-checker/#/',
        sourceLink: 'https://github.com/GabrielMCavalcante/statistics-answer-checker'
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