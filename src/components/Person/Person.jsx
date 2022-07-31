import styles from "./Person.module.scss";

const Person = ({ props: { profile_path, name, popularity }}) => {
  return (
    <div className={styles.card}>
      <img 
        src={`https://www.themoviedb.org/t/p/w235_and_h235_face/${profile_path}`} 
        className={styles.img} 
        alt={name} 
      />
      <h6 className={styles.subtitle}>popularity: 
        <span className={styles.subtitle_text}>{popularity}</span>
      </h6>
      <h3 className={styles.title}>{name}</h3>
    </div>
  )
}	

export { Person };
