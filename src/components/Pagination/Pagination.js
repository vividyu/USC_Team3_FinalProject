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
      <button className = "prev-page" onClick={handlePreviousPage} disabled={currentPage === 1}>
      ←
      </button>
      <span>
        {currentPage}/{totalPages}
      </span>
      <button className = "next-page" onClick={handleNextPage} disabled={currentPage === totalPages}>
      →
      </button>
    </div>
  );
};

export default Pagination;
