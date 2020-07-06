import React, { useState } from 'react'

// Icons
import {
    FiMenu,
    FiMail,
    FiGithub,
    FiLinkedin,
    FiSettings,
    FiClipboard
} from 'react-icons/fi'

// CSS styles
import './styles.css'

function Header() {

    const [classes, setClasses] = useState(["HeaderDropdown", "Closed"])

    function toggleDropdown() {
        const oldClasses = [...classes]
        if (oldClasses.includes("Closed") || oldClasses.includes("Close")) {
            oldClasses.pop()
            oldClasses.push('Open')
        }
        else {
            oldClasses.pop()
            oldClasses.push('Close')
        }
        setClasses(oldClasses)
    }

    return (
        <header className="Header">
            <nav>
                <div className="MenuToggler" onClick={toggleDropdown}><FiMenu /></div>
                <span>Gabriel Cavalcante</span>
                <ul className="HeaderLinks">
                    <li><a href="_self"><FiSettings /><span>Skills</span></a></li>
                    <li><a href="_self"><FiClipboard /><span>Projects</span></a></li>
                    <li><a href="_self"><FiMail /><span>Contact</span></a></li>
                    <li><a href="_self"><FiGithub /><span>Github</span></a></li>
                    <li><a href="_self"><FiLinkedin /><span>LinkedIn</span></a></li>
                </ul>
            </nav>
            <div className={classes.join(' ')}>
                <ul className="DropdownLinks">
                    <li>
                        <a
                            href="_self"
                        >
                            <FiSettings />
                            <span>Skills</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/GabrielMCavalcante"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiGithub />
                            <span>Github</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="_self"
                        >
                            <FiMail />
                            <span>Contact</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/gabrielmcavalcante"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiLinkedin />
                            <span>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="_self"
                        >
                            <FiClipboard />
                            <span>Projects</span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header