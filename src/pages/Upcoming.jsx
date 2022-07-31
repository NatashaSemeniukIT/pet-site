// general
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import { CardMovie } from "../components/Card/CardMovie";

// styles
import styles from "./Styles.module.scss";

const Upcoming = () => {
  const state = useSelector(state => state.toolkit);
  const { upcoming } = state.movies;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
          {upcoming.map((movie, index) => 
            <Link to={`/about/${movie.id}`} className={styles.link}>
              <CardMovie props={movie} key={index}/>
            </Link> 
          )}
      </div>
    </main>
  )
}

export { Upcoming };
