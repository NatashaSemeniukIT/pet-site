import { Link } from 'react-router-dom';

import styles from './Nav.module.scss';

const Nav = () => {

  return (
    <nav>
      <ul className={styles.list} id='nav'>
        <div className={styles.wrapper}>
          <li className={styles.item}>
            <Link to='/' className={styles.link_main}>Main</Link>
          </li>
        </div>

        <div className={styles.wrapper}>
          <li className={styles.item}>Movies</li>
          <div className={styles.nav_modal}>
            <ul>
              <li>
                  <Link to='/popular-movie' className={styles.link}>Popular</Link>
                </li>
                <li>
                  <Link to='/now-playing' className={styles.link}>Now-playing</Link>
                </li>
                <li>
                  <Link to='/upcoming' className={styles.link}>Upcoming</Link>
                </li>
                <li>
                  <Link to='/movie-top-rated' className={styles.link}>Top-rated</Link>
                </li>
            </ul>
          </div>
        </div>

        <div className={styles.wrapper}>
          <li className={styles.item}>TV Shows</li>
          <div className={styles.nav_modal}>
            <ul>
              <li>
                <Link to='/popular' className={styles.link}>Popular</Link>
              </li>
              <li>
                <Link to='/airing-today' className={styles.link}>Airing-today</Link>
              </li>
              <li>
                <Link to='/on-the-air' className={styles.link}>On-the-air</Link>
              </li>
              <li>
                <Link to='/tv-top-rated' className={styles.link}>Top-rated</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.wrapper}>
          <li className={styles.item}>People</li>
          <div className={styles.nav_modal}>
            <ul>
              <li>
                <Link to="/people" className={styles.link}>Сelebrities</Link>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </nav>
  )
}
export { Nav };
