// general
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// components
import { CardMovie } from "../components/Card/CardMovie";

// styles
import styles from "./Styles.module.scss";

const PopularMovie = () => {
  const state = useSelector(state => state.toolkit);
  const { discover } = state.movies;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {discover.map((movie, index) => 
          <Link to={`/about/${movie.id}`} className={styles.link}>
            <CardMovie props={movie} key={index}/>
          </Link> 
        )}
      </div>
    </main>
  )
}

export { PopularMovie };
