import React from 'react'

const Pagination = ({handleChangePage, page, count, pageLabelBuilder}) => {
    const handleprevPage = () => {
        if (page > 1) handleChangePage(page -1);
    }
    const handleNextPage = () => {
        if (page < count) handleChangePage(page + 1)
    }
  return (
    <div>
        <button onClick={handleprevPage} disabled={page === 1}>prev</button>
        {pageLabelBuilder()}
        <button onClick={handleNextPage} disabled={page === count}>next</button>
    </div>
  )
}

export default Pagination
