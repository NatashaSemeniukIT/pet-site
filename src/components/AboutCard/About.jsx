// general
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// styles
import styles from "./About.module.scss";

const About = () => {
  const { id } = useParams();
  const movies = useSelector(state => state.toolkit.movies);

  let element;

  const getElementById = () => {
    Object.values(movies).forEach(movie => {
      movie.map(value => {

        if (value.id === +id) {
          element = value;
        }
      })
    })
  }

  getElementById();

  const { 
    backdrop_path, 
    poster_path, 
    name,
    title,
    original_name,
    original_title, 
    popularity, 
    overview, 
    first_air_date,
    release_date,
    vote_average } = element;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <img 
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`} 
            className={styles.pic_left}
            alt={name || title}
          />
        </div>
       
        <div className={styles.text}>
          <h1 className={styles.title}>{name || title}</h1>
          <h5 className={styles.subtitle}>original name:  
            <span> {original_name || original_title}</span> 
          </h5>
         
          <div className={styles.details}>
            <div>release date:
              <span className={styles.text_date}> {first_air_date || release_date}</span>
            </div>
            <div>popularity: 
              <span className={styles.text_info}> {popularity}</span>
            </div>
            
            <div>rating:
              <span className={styles.text_rating}> {vote_average}</span> 
            </div>
            <h4 className={styles.subject}>review</h4>
          </div>
          <p className={styles.desc}>{overview}</p>
        </div>
        <div className={styles.wrap}>
            <img 
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${backdrop_path}`} 
              className={styles.pic_right}
              alt={name || title} 
            />
          </div>
      </div>
    </main>
  )
}

export { About };
