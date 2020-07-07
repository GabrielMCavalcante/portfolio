import React from 'react'

interface Props {
    headers: string[]
}

function TableHeader(props: Props) {
    return (
        <thead>
            <tr>
                { props.headers.map((header, i) => (<th key={i}>{ header }</th>)) }
            </tr>
        </thead>
    )
}

export default TableHeader