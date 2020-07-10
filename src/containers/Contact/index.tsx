import React, { useState } from 'react'

// Axios
import axios from 'axios'

// Components
import Form from 'components/UI/Form'
import FormResponse from 'components/UI/FormResponse'

// CSS styles
import './styles.css'

const fields = [
    {
        label: 'Your name',
        name: 'name',
        type: 'text',
        config: {
            placeholder: 'Personal or business name'
        },
        validation: /^[a-záàâãéèêíïóôõöúçñ\s]{3,}$/i,
        feedback: 'The name has to contain at least 3 characters, no special characters.',
        isValid: false,
        touched: false,
        value: ''
    },
    {
        label: 'Your E-mail address',
        name: 'email',
        type: 'email',
        config: {
            placeholder: 'example@domain.com'
        },
        validation: /([a-z\d.-]+)@([a-z\d-]+)(\.[a-z]{2,8}(\.[a-z]{2,8})?)/i,
        feedback: 'The email has to be in a valid email format ex.: example@domain.com',
        isValid: false,
        touched: false,
        value: ''
    },
    {
        label: 'Your Message',
        name: 'message',
        type: 'textarea',
        validation: /(\w|\s){10,}/i,
        feedback: 'The message has to have at least 10 characters.',
        isValid: false,
        touched: false,
        value: ''
    }
]

interface FieldValues {
    name: string,
    email: string,
    message: string
}

function Contact() {
    const [sendingMail, setSendingMail] = useState(false)
    const [resetForm, setResetForm] = useState(false)
    const [mailSuccess, setMailSuccess] = useState<string>()

    function sendMessage(fieldsValues: FieldValues) {
        setSendingMail(true)
        setResetForm(false)
        const emailData = {
            name: fieldsValues.name,
            email: fieldsValues.email,
            message: fieldsValues.message
        }
        axios.post('http://localhost:5000/sendmail', emailData)
            .then(res => {
                const response = res.data
                setSendingMail(false)
                if (response.status === 'Ok') {
                    setResetForm(true)
                    setMailSuccess('Ok')
                } else if (response.status === 'Error') setMailSuccess('Error')
            })
            .catch(() => {
                setSendingMail(false)
                setMailSuccess('Error')
            })
    }

    return (
        <div className="Contact">
            <h2>Contact Me</h2>
            <div className="FormWrapper">
                <Form
                    resetForm={resetForm}
                    loading={sendingMail}
                    fields={fields}
                    onsubmit={(fieldsValues: FieldValues) => sendMessage(fieldsValues)}
                />
                {
                    mailSuccess &&
                    <FormResponse
                        onclose={() => setMailSuccess('')}
                        status={mailSuccess}
                    />
                }
            </div>
        </div>
    )
}

export default Contact