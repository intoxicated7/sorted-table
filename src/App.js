import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Items, Pagination, Filter } from './components'

const App = () => {

  const [items, setItems] = useState([])
  const [itemsFull, setItemsFull] = useState()
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const lastPostIndex = currentPage * 6;
  const firstPostIndex = lastPostIndex - 6;

  const fetchItems = async () => {
      const { data } = await axios.get('https://632c60681aabd837399ab2ef.mockapi.io/users')
      
      const currentPosts = data.slice(firstPostIndex, lastPostIndex)  

      setItems(currentPosts)
      setItemsFull(data)
  }

  useEffect(() => {
    fetchItems()
  }, [currentPage])

  const updateSearch = (value) => setSearch(value)
  const updateItems = (value) => setItems(value)
  const updatePaginate = (value) => setCurrentPage(value)
  const updateShowAll = () => setItems(itemsFull)

  const totalPages = itemsFull? Math.ceil((itemsFull.length) / 6) : 0

  return (
    <div className="App">
      <div className="w-[800px] mx-auto">
        <Filter 
          items={items}
          updateItems={updateItems} 
          updateSearch={updateSearch}
        />
        <div className="bg-indigo-600 w-[100%] px-3">
          <ul className="grid grid-cols-4">
            <li className="cursor-pointer">Название</li>
            <li>Количество</li>
            <li>Дистанция</li>
            <li>Дата</li>
          </ul>
        </div>
        <Items items={items} search={search} />
        <Pagination 
          updateShowAll={updateShowAll}
          updatePaginate={updatePaginate}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

export default App;
