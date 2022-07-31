// general
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

// styles
import styles from './ButtonsBackground.module.scss';

const ButtonsBackground = () => {
  const dispatch = useDispatch();
  const [background, setBackground] = useState('#121821');
  
  document.body.style.background = background;

  return (
    <div className={styles.wrap}>
      <button className={styles.btnDark} onClick={() => dispatch(setBackground('#121821'))}>DARK</button>
      <button className={styles.btnWhite} onClick={() => dispatch(setBackground('#FAECE5'))}>WHITE</button>
    </div>
    )
}

export { ButtonsBackground };
