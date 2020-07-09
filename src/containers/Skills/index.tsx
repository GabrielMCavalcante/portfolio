import React, { useState, useEffect } from 'react'

// Axios instance
import axios from 'axios-config'

// Components
import Table from 'components/Table'

// CSS styles
import './styles.css'

interface Document {
    fields: {
        header: { stringValue: string },
        items: { arrayValue: { values: { stringValue: string }[] } }
    }
}

interface Skill {
    header: string,
    items: string[]
}

function Skills() {

    const [skills, setSkills] = useState<Skill[]>()

    useEffect(() => {
        async function fetchProjects() {
            const response = await axios.get('/skills')
            const documents: Document[] = response.data.documents
            const parsedSkills: Skill[] = []
            documents.forEach(doc => {
                parsedSkills.push({
                    header: doc.fields.header.stringValue,
                    items: doc.fields.items.arrayValue.values.map(value => value.stringValue)
                })
            })
            setSkills(parsedSkills)
        }
        fetchProjects()
    }, [])

    return (
        <div className="Skills">
            <h2>My Skills</h2>
            {skills && <Table data={skills} />}
        </div>
    )
}

export default Skills