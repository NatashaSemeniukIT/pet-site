// general
import { Link } from 'react-router-dom';

// logo
import logo from '../../assets/logo/logo.svg';

// styles
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div>
      <Link 
        to='/' 
        className={styles.link} 
        name='top'
      >
        <img
          src={logo}
          className={styles.logo}
          alt='logo-sing'
        />
      </Link>
    </div>
  )
}

export { Logo };
