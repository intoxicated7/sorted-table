import React, { useEffect, useState } from 'react'
import { columns, sorts } from '../helpers'

const Filter = ({ items, updateSearch, updateItems }) => {

  const [search, setSearch] = useState('')
  const [columnId, setColumnId] = useState('name')
  const [sortId, setSortId] = useState('alphabet')

  const columnByName = Object.fromEntries(columns.map(column => [column.name, column.property]));
  const sortByName = Object.fromEntries(sorts.map(sort => [sort.name, sort.property]));


  useEffect(() => {updateSearch(search)}, [search])

  useEffect(() => {updateItems(items)}, [])

  const handleFilter = () => {

    let copyItems = items.concat()


    if(columnId === 'name') {
      if(sortId === 'alphabet') {
        const sortedItems = copyItems.sort((a, b) => {
          return a.name > b.name ? 1 : -1
        })
        updateItems(sortedItems)
        console.log(sortedItems)
      }
      if(sortId === '-alphabet') {
        const sortedItems = copyItems.sort((a, b) => {
          return a.name < b.name ? 1 : -1
        })
        updateItems(sortedItems)
        console.log(sortedItems)
      }
    }
    if(columnId === 'quantity') {
      if(sortId === 'number') {
        const sortedItems = copyItems.sort((a, b) => {
          return a.quantity > b.quantity ? 1 : -1
        })
        updateItems(sortedItems)
      }
      if(sortId === '-number') {
        const sortedItems = copyItems.sort((a, b) => {
          return a.quantity < b.quantity ? 1 : -1
        })
        updateItems(sortedItems)
      }
    }
    if(columnId === 'distance') {
      if(sortId === 'number') {
        const sortedItems = copyItems.sort((a, b) => {
          return a.distance > b.distance ? 1 : -1
        })
        updateItems(sortedItems)
      }
      if(sortId === '-number') {
        const sortedItems = copyItems.sort((a, b) => {
          return a.distance < b.distance ? 1 : -1
        })
        updateItems(sortedItems)
      }
    }

  }

  return (
    <div className="bg-indigo-400 flex justify-between space-x-4 items-end py-2 px-3">
      <div>
        Поиск:
        <input 
          type="text" 
          placeholder="Напишите значение" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        Выбор колонки:
        <select onChange={(e) => setColumnId(columnByName[e.target.value])}>
        {
          columns.map((column, i) => (
            <option key={i} value={column.name}>{column.name}</option>
          ))
        }
        </select>
      </div>
      <div>
        Способ сортировки колонки:
        <select onChange={(e) => setSortId(sortByName[e.target.value])}>
          {
            sorts.map((sort, i) => (
              <option key={i} value={sort.name}>{sort.name}</option>
            ))
          }
        </select>
      </div>
      <div>
        <button onClick={() => handleFilter()} className="bg-white p-1">Фильтровать</button>
      </div>
  </div>
  )
}

export default Filter