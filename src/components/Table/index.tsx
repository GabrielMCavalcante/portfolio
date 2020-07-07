import React from 'react'

// Components
import TableHeader from './TableHeader'
import TableBody from './TableBody'

// CSS styles
import './styles.css'

interface Props {
    data: {
        header: string,
        items: (string | null)[]
    }[]
}

function Table(props: Props) {

    const headers = props.data.map(data => data.header)
    const items = props.data.map(data => data.items)

    return (
        <table className="Table">
            <TableHeader headers={headers} />
            <TableBody items={items}/>
        </table>
    )
}

export default Table