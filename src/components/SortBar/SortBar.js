import './SortBar.css';

const SortBar = ({setSortWord, setCurrPage}) => {

  function handleClick(str) {
    setSortWord(str);
    setCurrPage(1);
  }

  return(<div className='sort-bar'>
     <button onClick={() => handleClick('title')}>Title</button>
     <button onClick={() => handleClick('release date')}>Release Date</button>
     <button onClick={() => handleClick('vote average')}>Vote Average</button>
     <button onClick={() => handleClick('vote count')}>Vote Count</button>
  </div>);
}


export default SortBar;