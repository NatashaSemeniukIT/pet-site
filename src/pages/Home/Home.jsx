// general
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// components
import { CardMovie } from '../../components/Card/CardMovie';
import { Slider } from '../../components/Slider/Slider';
import { MoviesUpcoming } from '../../components/MoviesUpcoming/MoviesUpcoming';

// styles
import styles from './Home.module.scss';

const Home = () => {
  const state = useSelector(state => state.toolkit);
  const { discover } = state.movies;

    return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Slider />
        <MoviesUpcoming />
        <section className={styles.section}>
          <Link to='/popular-movie' className={styles.link_title}>
            <span className={styles.title}>The most popular movies to watch &gt;</span>
          </Link>
          <div className={styles.box}>
            {discover.map((movie, index) => 
              <Link 
                to={`/about/${movie.id}`} 
                key={index} 
                className={styles.link}
              >
                <CardMovie key={index} props={movie}/>
              </Link>
            )}
          </div> 
        </section>
        <MoviesUpcoming />
      </div>
    </main>
  )
}

export { Home };
