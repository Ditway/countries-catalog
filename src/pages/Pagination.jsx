import React from "react";
import "../dist/css/pagination.css";

const Pagination = ({
  nextPage,
  prevPage,
  nPages,
  currentPage,
  handleEnterKey,
  handlePageInput,
  pageInput,
}) => {
  const disableBtn = (pageNum) =>
    parseInt(currentPage) === pageNum ? "disabled" : "";

  return (
    <div className="paginationBtns">
      <span>Page</span>

      <label aria-label="Enter page Number" htmlFor="pageInput"></label>
      <input
        id="pageInput"
        name="pageInput"
        type="number"
        value={pageInput}
        onChange={handlePageInput}
        onKeyUp={handleEnterKey}
      />

      <span>of {nPages}</span>
      <button
        aria-label="Previous Page"
        className="btnPag btnPrev"
        onClick={prevPage}
        disabled={disableBtn(1)}
      >
        <i className="fa fas fa-chevron-left pagination-arrow"></i>
      </button>
      <button
        aria-label="Next Page"
        className="btnPag btnNext"
        onClick={nextPage}
        disabled={disableBtn(nPages)}
      >
        <i className="fa fas fa-chevron-right pagination-arrow"></i>
      </button>
    </div>
  );
};

export default React.memo(Pagination);
