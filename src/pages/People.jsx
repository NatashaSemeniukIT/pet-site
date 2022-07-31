// general
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import { Person } from '../components/Person/Person';

// styles
import styles from './Styles.module.scss';

const People = () => {
  const state = useSelector(state => state.toolkit);
  const { persons } = state.movies;
  
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {persons.map((person, index) => 
          <Link 
            to={`/person/${person.id}`} 
            key={index}
            className={styles.link}
          >
            <Person key={index} props={person} />
          </Link> 
        )}
      </div>
    </main>
  )
}

export { People };
