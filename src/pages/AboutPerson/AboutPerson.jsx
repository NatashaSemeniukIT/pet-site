// general
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// styles
import styles from "./AboutPerson.module.scss";

const AboutPerson = () => {
  const { id } = useParams();
  const persons = useSelector(state => state.toolkit.movies.persons);

  let element;

  const getElementById = () => {
      persons.map(person => {
        
        if (person.id === +id) {
          element = person;
        }
      })
    }

  getElementById();
  
  const { name, popularity, profile_path, known_for } = element;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div>
            <img 
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${profile_path}`} 
              className={styles.img}
              alt={name}
            />
          </div>
          <div className={styles.text}>
            <h1 className={styles.title}>{name}</h1>
            <h5 className={styles.subtitle}>popularity: 
              <span> {popularity}</span>
            </h5>
            <h2 className={styles.subject}>Known for:</h2>
            <div className={styles.wrapper}>
              {known_for.map(({title, name, release_date, first_air_date, poster_path}, index) => 
                <div key={index} className={styles.card_movie}>
                  <div className={styles.subtitle}>release_date: 
                    <span> {release_date || first_air_date}</span>
                  </div> 
                  <div>
                    <img 
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
                      alt={title || name}/>
                  </div>
                  <div className={styles.title}>{title || name}</div>
                </div>
              )}
            </div> 
          </div>
        </div>
      </div>
    </main>
  )
}

export { AboutPerson };
