import React from 'react'

// Icons
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaCopyright } from 'react-icons/fa'

// CSS styles
import './styles.css'

function Footer() {
    return (
        <footer className="Footer">
            <p><FaCopyright /> <span>Gabriel Cavalcante - 2020</span></p>
            <p><a
                href="https://github.com/GabrielMCavalcante"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FiGithub />
                <span>Github</span>
            </a> | <a
                href="https://linkedin.com/in/gabrielmcavalcante"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FiLinkedin />
                <span>LinkedIn</span>
            </a></p>
            <p><FiMail /><span>contato.gabrielmcavalcante@gmail.com</span></p>
        </footer>
    )
}

export default Footer