import React from 'react'

// CSS styles 
import './styles.css'

interface Props {
    onclick: (...params: any[]) => any | void
}

export default (props: Props) => (
    <div 
        onClick={props.onclick} 
        className="Backdrop"
    ></div>
)