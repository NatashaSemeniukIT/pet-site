// general
import { Link } from 'react-router-dom';
import { dataSlider } from './dataSlider';
import Button from 'react-bootstrap/Button';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// styles
import styles from "./Slider.module.scss";

const Slider = () => {
  return (
    <section className={styles.container_slider}>
      <AliceCarousel autoPlay autoPlayInterval='7000'>
        {dataSlider.map(({name, id, image}, index) => {
          return (
            <div key={index}>
              <div className={styles.box}>
                <h1 className={styles.title}>{name}</h1>
                <Link 
                  to={`/about/${id}`} 
                  key={index}
                >
                  <Button variant="warning" className={styles.button}>About</Button>
                </Link>
              </div>
              <img 
                src={image} 
                className={styles.slider_img} 
                alt={name}/>
            </div>
          )
        })}
      </AliceCarousel>    
    </section>
  )
}

export { Slider };
