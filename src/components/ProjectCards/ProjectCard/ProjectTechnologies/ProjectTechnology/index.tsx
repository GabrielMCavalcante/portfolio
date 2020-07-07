import React from 'react'

interface Props {
    technology: string
}

function ProjectTechnology(props: Props) {
    return (
        <div className="ProjectTechnology">
            {props.technology}
        </div>
    )
}

export default ProjectTechnology