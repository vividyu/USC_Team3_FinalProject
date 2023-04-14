import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({ totalPages, setCurrentPage }) => {
  const [currentPage, _setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      _setCurrentPage(newPage);
      setCurrentPage(newPage);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      _setCurrentPage(newPage);
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="pagination-container">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Prev
      </button>
      <span>
        {currentPage}/{totalPages}
      </span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
