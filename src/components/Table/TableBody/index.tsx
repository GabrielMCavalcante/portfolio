import React from 'react'

interface Props {
    items: (string | null)[][]
}

function TableBody(props: Props) {
    const rows: JSX.Element[] = []
    const placeholder = '-----------------'
    let limit = 0

    for(let i = 0; i < props.items.length; i++) {
        if(props.items[i].length > limit) 
            limit = props.items[i].length
    }

    for (let i = 0; i < limit; i++) {
        rows.push((
            <tr key={i}>
                {props.items.map(item => {
                    const tdContent = item.filter((_, index) => index === i)[0]

                    return (
                        <td 
                            key={Math.random()}
                        >{ tdContent ? tdContent : placeholder }</td>
                    )
                })}
            </tr>
        ))
    }

    return <tbody>{ rows }</tbody>
}

export default TableBody