import "./SortBar.css";

const SortBar = ({ handleSort }) => {
  function handleClick(str) {
    handleSort(str);
  }

  return (
    <div className="sort-bar">
      <span>Sort By: </span>
      <button onClick={() => handleClick("title")}>Title</button>
      <button onClick={() => handleClick("release date")}>Release Date</button>
      <button onClick={() => handleClick("vote average")}>Vote Average</button>
      <button onClick={() => handleClick("vote count")}>Vote Count</button>
    </div>
  );
};

export default SortBar;
