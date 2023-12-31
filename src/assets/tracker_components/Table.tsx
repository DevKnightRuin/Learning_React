import React from 'react'
import { DataInfo } from '../Utilities/interfaceTypes'

interface Props{
    itemList: DataInfo[]
}

const Table = ({itemList}: Props) => {
  return (
    <>
    <table className='table table-striped'>
        <thead>
            <tr> 
                <th></th>
                <th>Item</th>
                <th>Cost</th>
                <th>Category</th>
                <th>Info</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {itemList.map((val, iter) => { return(
                <tr key={iter}>
                    <td>{iter}</td>
                    <td>{val.itemName}</td>
                    <td>{Number.isNaN(val.cost)? 0 : val.cost}</td>
                    <td>{val.Category}</td>
                    <td>{val.info}</td>
                    <td>DELETE</td>
                </tr>
            )
            })}
            

        </tbody>
        {/* map over an array to fill in the rest */}
    </table>
    
    </>
  )
}

export default Table