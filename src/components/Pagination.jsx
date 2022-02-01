import React from "react";

const Pagination = ({ giftsPerPage, totalGifts, paginate, currentPage, nextPage, previousPage, setGiftsPerPage }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalGifts / giftsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination-cont">
      <ul className="pagination">
        <li className="page-item" id="prev" >
          <button onClick={previousPage} disabled={currentPage < 2}>
            &lt;
          </button>
        </li>
        {
          pageNumbers.map((number, i) => (
            <li className={currentPage === i + 1 ? "page-item current" : "page-item"} 
              key={number} 
              onClick={() => paginate(number)}
            >
              <div className="page-link" >
                {number}
              </div>
            </li>)
          )
        }
        <li className="page-item" id="next" >
          <button onClick={nextPage} disabled={currentPage > pageNumbers.length - 1}>
            &gt;
          </button>
        </li>
      </ul>

      <select name="page-selector" id="page-selector" value={giftsPerPage} onChange={(e) => setGiftsPerPage(e.target.value)}>
        <option value="5" onClick={() => setGiftsPerPage(5)}>5</option>
        <option value="10" onClick={() => setGiftsPerPage(10)}>10</option>
        <option value="15" onClick={() => setGiftsPerPage(15)}>15</option>
      </select>
    </div>
  )

}

export default Pagination;
