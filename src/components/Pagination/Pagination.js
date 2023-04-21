import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container">
      <button
        className="prev-page"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        ←
      </button>
      <span>
        Page {currentPage}/{totalPages}
      </span>
      <button
        className="next-page"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        →
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
