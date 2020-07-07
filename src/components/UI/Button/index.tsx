import React from 'react'

// CSS styles
import './styles.css'

function Button(props: any) {
    return (
        <a 
            className="Button" 
            href={props.redirectTo} 
            target="_blank" 
            rel="noopener noreferrer"
        >{props.children}</a>
    )
}

export default Button