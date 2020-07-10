import React from 'react'

// Icons
import { FiCheckCircle, FiXCircle, FiX } from 'react-icons/fi'

// CSS styles
import './styles.css'

function FormResponse(props: { status: string, onclose: () => void}) {
    return (
        <div className="FormResponse">
            <div className="FormResponseContent">
                <div className="CloseIcon" onClick={props.onclose}><FiX /></div>
                <div className="Response">
                    <h2>{
                        props.status === 'Ok'
                        ? 'Email sent successfully!'
                        : 'An error occurred whilst sending the email. Try Again.'
                    }</h2>
                    <div className="StatusIcon">
                        {
                            props.status === 'Ok' 
                            ? <FiCheckCircle />
                            : <FiXCircle />
                        }
                    </div>
                    <button className="ResponseAction" onClick={props.onclose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default FormResponse