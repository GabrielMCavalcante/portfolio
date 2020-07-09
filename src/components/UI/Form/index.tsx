import React, { useState } from 'react'

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

interface Props {
    fields: Field[],
    onsubmit: (...params: any[]) => void
}

function Form(props: Props) {

    const [formValid, setFormValid] = useState(false)
    const [fields, setFields] = useState(props.fields)

    function checkValidation(event: React.ChangeEvent<any>, field: Field) {
        const thisField = fields.filter(fd => fd.name === field.name)[0]
        let valid = false
        if (field.validation) {
            if (event.target.value.match(field.validation))
                valid = true
        } else valid = true

        thisField.value = event.target.value
        thisField.isValid = valid
        if(!thisField.touched)
            thisField.touched = true
        
        const parsedFields = fields.map(fd => {
            if (fd.name !== field.name) return fd
            else return thisField
        })
        setFields(parsedFields)
        let formIsValid = true
        parsedFields.forEach(pfield => {
            if (formIsValid) {
                if (!pfield.isValid)
                    formIsValid = false
            }
        })
        if (formIsValid !== formValid)
            setFormValid(formIsValid)
    }

    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const fieldsValues = fields.map(field => [field.name, field.value])
        props.onsubmit(fieldsValues)
    }

    return (
        <form className="Form" onSubmit={submitHandler}>
            {fields.map(field => (
                <React.Fragment key={fields.indexOf(field)}>
                    <label htmlFor={field.name}>{field.label}</label>
                    {
                        field.type !== 'textarea'
                            ? <input
                                value={field.value}
                                className={!field.isValid && field.touched ? 'Invalid' : ''}
                                type={field.type}
                                {...field.config}
                                onChange={e => checkValidation(e, field)}
                            />
                            : <textarea className={!field.isValid && field.touched ? 'Invalid' : ''}
                                value={field.value}
                                {...field.config}
                                onChange={e => checkValidation(e, field)}
                            />
                    }
                </React.Fragment>
            ))}
            <button disabled={!formValid}>Send Message</button>
        </form>
    )
}

export default Form