// general
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';

// styles
import styles from './Search.module.scss';

const Search = () => {
  const { movies } = useSelector(state => state.toolkit);
  const [filterData, setFilterData] = useState([]);

  const handleFilter = (e) => {
    e.preventDefault();
    const searchWord = e.target.value;
    
    const allSearchMovies = Object.values(movies).map(items => items.filter(({title}) => {
      return `${title}`.toLowerCase().includes(searchWord.toLowerCase())
    }));

    let arrayMovies = [];
    
    for (let i = 0; i < allSearchMovies.length; i++) {

      if (allSearchMovies[i].length > 0) {
        allSearchMovies[i].map(item => arrayMovies.push(item));
      }
    }

    const table = {};
    const newResult = arrayMovies.filter(({title}) => (!table[title] && (table[title] = 1)));
    
    setFilterData(newResult);
  
    if (e.target.value === '') {
      setFilterData([]);
    } 
  }
  
  const close = () => {
    document.getElementById('search').value = '';

    setFilterData([]);
  }

  document.onclick = function() {
    document.getElementById('result').style.display = 'none';
  }

  return (
    <div className={styles.search_box} id='search'>
      <BiSearchAlt2 className={styles.icon_search} />
      <input
        type="text" 
        className={styles.search}   
        onChange={handleFilter}
        id="search" 
        placeholder='Search...'
      /> 
      {filterData != 0 && (
      <div className={styles.dataResults} id='result'>
        {filterData.map(({title, id}, index) => {
          return (
            <div key={index} className={styles.dataItem}>
              <Link 
                to={`/about/${id}`} 
                className={styles.link}
                onClick={close}
              >
                {title}
              </Link>
            </div>
          )
        })}
      </div>
      )}
    </div>
  )
}

export { Search };
