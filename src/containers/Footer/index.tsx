import React, { useState } from 'react'

// Icons
import { FiGithub, FiLinkedin, FiMail, FiLink2 } from 'react-icons/fi'
import { FaCopyright } from 'react-icons/fa'

// CSS styles
import './styles.css'

function Footer() {

    const [copied, setCopied] = useState(false)

    function copyMail() {
        setCopied(false)
        const input = document.createElement('input')
        input.value = 'contato.gabrielmcavalcante@gmail.com'
        document.body.appendChild(input)
        input.select()
        document.execCommand("Copy")
        document.body.removeChild(input)
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
    }

    const classes = ["CopyFeedback"]
    if(copied) classes.push("Show")

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
            <p className="Email">
                <FiMail />
                <span>contato.gabrielmcavalcante@gmail.com</span>
                <span className="CopyMail" onClick={copyMail}><FiLink2 /></span>
                <span className={classes.join(' ')}>Copied!</span>
            </p>
        </footer>
    )
}

export default Footer