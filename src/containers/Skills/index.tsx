import React from 'react'

// Components
import Table from 'components/Table'

// CSS styles
import './styles.css'

const skills = [
    { header: 'Web Technologies', items: ['HTML 5', 'CSS 3', 'Typescript'] },
    { header: 'Frameworks', items: ['React', 'React Native', 'Vue'] },
    { header: 'State Management', items: ['Redux', 'Context API', 'React Hooks', 'Vuex'] }
]

function Skills() {
    return (
        <div className="Skills">
            <h2>My Skills</h2>
            <Table data={skills}/>
        </div>
    )
}

export default Skills