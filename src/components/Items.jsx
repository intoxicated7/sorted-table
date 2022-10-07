import React from 'react'
import { filteredItems } from '../helpers'

const Items = ({ items, search }) => {

  return (
    <div className="bg-indigo-500 w-[100%] px-3">
        {filteredItems(items, search).map(item => (
        <ul key={item.id} className="grid grid-cols-4">
            <li>{item.name}</li>
            <li>{item.quantity}</li>
            <li>{item.distance}</li>
            <li>{item.date}</li>
        </ul>
        ))}
    </div>
  )
}

export default Items