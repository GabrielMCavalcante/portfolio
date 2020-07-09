import React from 'react'

// Components
import Form from 'components/UI/Form'

// CSS styles
import './styles.css'

interface Field {
    label: string,
    name: string,
    type: string,
    value: string,
    placeholder?: string,
    config?: { [key: string]: any }[],
    validation?: (RegExp | string),
    isValid: boolean,
    touched: boolean
}

const fields = [
    {
        label: 'Your E-mail address',
        name: 'email',
        type: 'email',
        placeholder: 'example@domain.com',
        validation: /([a-z\d.-]+)@([a-z\d-]+)(\.[a-z]{2,8}(\.[a-z]{2,8})?)/i,
        isValid: false,
        touched: false,
        value: ''
    },
    {
        label: 'Your Message',
        name: 'message',
        type: 'textarea',
        validation: /(\w|\s){10,}/i,
        isValid: false,
        touched: false,
        value: ''
    }
]

function Contact() {

    function sendMessage(fieldsValues: [string, string][]) {
        
    }

    return (
        <div className="Contact">
            <h2>Contact Me</h2>
            <Form fields={fields} onsubmit={(fieldsValues: [string, string][]) => sendMessage(fieldsValues)} />
        </div>
    )
}

export default Contact