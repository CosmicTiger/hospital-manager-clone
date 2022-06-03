import { Fragment } from 'react'
import { Table as BTable } from 'react-bootstrap'

const Table = (props) => {
    const { items, columns } = props

    const renderRowCells = (item) => {
        const cells = []

        Object.entries(item).forEach(([key, value]) => {

            const column = columns.find(column => column.key === key)

            console.log(column)

            if (column) {
                cells.push({
                    key,
                    component: <td key={key}>{value}</td>
                })
            }

            return
        })

        return cells && cells.map(cell => cell.component)
    }

    return (
        <BTable responsive>
            <thead>
                <tr>
                    {columns && columns.map((column, index) => (
                        <Fragment key={index}>
                            <td>{column.name}</td>
                        </Fragment>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items && items.map((item, index) => (
                    <tr key={index}>
                        {renderRowCells(item)}
                    </tr>
                ))}
            </tbody>
        </BTable>
    )
}

export default Table
