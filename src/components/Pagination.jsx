import React from 'react'

const Pagination = ({ updatePaginate, updateShowAll, currentPage, totalPages }) => {

  return (
    <div className="flex float-right mt-3 space-x-2">
        <button onClick={() => updateShowAll()} className="bg-slate-300 border-slate-500 border-2 px-2">Показать все</button>
        <button disabled={currentPage <= 1} onClick={() => updatePaginate(currentPage -= 1)} className="border-indigo-600 border-2 hover:bg-indigo-400 px-2">Назад</button>
        <button disabled={currentPage == totalPages} onClick={() => updatePaginate(currentPage += 1)} className="border-indigo-600 border-2 hover:bg-indigo-400 px-2">Вперед</button>
    </div>
  )
}

export default Pagination