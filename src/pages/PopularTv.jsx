// general
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// components
import { CardMovie } from "../components/Card/CardMovie";

// styles
import styles from "./Styles.module.scss";

const PopularTv = () => {
  const state = useSelector(state => state.toolkit);
  const { popular } = state.movies;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {popular.map((value, index) => 
          <Link to={`/about/${value.id}`} className={styles.link}>
            <CardMovie props={value} key={index}/>
          </Link> 
        )}
      </div>
    </main>
  )
}

export { PopularTv };
