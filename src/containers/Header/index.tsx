import React, { useState } from 'react'

// Components
import Backdrop from 'components/UI/Backdrop'

// Icons
import {
    FiX,
    FiMenu,
    FiMail,
    FiGithub,
    FiLinkedin,
    FiSettings,
    FiClipboard
} from 'react-icons/fi'
import { GoClippy } from 'react-icons/go'

// CSS styles
import './styles.css'

function Header() {
    const [classes, setClasses] = useState(["HeaderDropdown", "Closed"])

    function closeDropdown() {
        const oldClasses = [...classes]
        oldClasses.pop()
        oldClasses.push('Close')
        setClasses(oldClasses)
    }

    function toggleDropdown() {
        if ((classes.includes("Closed") || classes.includes("Close"))) {
            const oldClasses = [...classes]
            oldClasses.pop()
            oldClasses.push('Open')
            setClasses(oldClasses)
        }
        else closeDropdown()
    }

    return (
        <header className="Header">
            <div className="HeaderContent">
                <nav>
                    <div className="MenuToggler" onClick={toggleDropdown}>
                        {
                            classes.includes('Open')
                                ? <FiX />
                                : <FiMenu />
                        }
                    </div>
                    <span className="Logo">Gabriel Cavalcante</span>
                    <ul className="HeaderLinks">
                        <li>
                            <a href="#skills">
                                <FiSettings />
                                <span>Skills</span>
                            </a>
                        </li>
                        <li>
                            <a href="#projects">
                                <GoClippy />
                                <span>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <FiMail />
                                <span>Contact</span>
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
                                href="https://linkedin.com/in/gabrielmcavalcante"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiLinkedin />
                                <span>LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className={classes.join(' ')}>
                    <ul className="DropdownLinks">
                        <li>
                            <a href="#skills" onClick={toggleDropdown}>
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
                            <a href="#projects" onClick={toggleDropdown}>
                                <FiClipboard />
                                <span>Projects</span>
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
                            <a href="#contact" onClick={toggleDropdown}>
                                <FiMail />
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {classes.includes("Open") && <Backdrop onclick={closeDropdown} />}
            </div>
        </header>
    )
}

export default Header