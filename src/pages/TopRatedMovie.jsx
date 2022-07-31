// general
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// components
import { CardMovie } from "../components/Card/CardMovie";

// styles
import styles from "./Styles.module.scss";

const TopRatedMovie = () => {
  const state = useSelector(state => state.toolkit);
  const { topRatedMovie } = state.movies;


  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {topRatedMovie.map((movie, index) => 
          <Link to={`/about/${movie.id}`} className={styles.link}>
            <CardMovie props={movie} key={index}/>
          </Link> 
        )}
      </div>
    </main>
  )
}

export { TopRatedMovie };
