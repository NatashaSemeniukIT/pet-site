// general
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// components
import { CardImg } from "../CardImg/CardImg";

// styles
import styles from "./MoviesUpcoming.module.scss";

const MoviesUpcoming = () => {
  const state = useSelector(state => state.toolkit);
  const { upcoming } = state.movies;

  return (
    <section className={styles.section}>
      <Link to="/upcoming" className={styles.link}>
        <span className={styles.subject}>Movies we are all waiting for &gt;</span>
      </Link>
      <div className={styles.wrap}>
        {upcoming.map((movie, index) => 
          <Link to={`/about/${movie.id}`} key={index}>
            <CardImg props={movie} key={index}/>
          </Link> 
        )}
      </div>
    </section>   
  )
}

export { MoviesUpcoming };
