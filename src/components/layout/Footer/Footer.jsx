import {
  BsArrowUpSquare, 
  BsEnvelopeFill, 
  BsWhatsapp, 
  BsTwitter, 
  BsLinkedin, 
  BsCursorFill, 
  BsFillTelephoneInboundFill 
} from 'react-icons/bs';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <span>&copy; 2022 SING</span>
            <div>
              <a href="#top" className={styles.link_top}>
                <BsArrowUpSquare />
              </a>
            </div>
          </div>
          <div className={styles.icons}>
            <ul className={styles.list}>
              <li>
                <a>
                  <BsEnvelopeFill />
                </a>
              </li>
              <li>
                <a>
                  <BsWhatsapp />
                </a>
              </li>
              <li>
                <a>
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a>
                  <BsLinkedin />
                </a>
              </li>
              <li>
               <a>
                  <BsCursorFill />
                </a>
              </li>
              <li>
                <a>
                  <BsFillTelephoneInboundFill />
                </a>
              </li>
            </ul>
        </div> 
      </div>
    </footer>
  )
}

export { Footer };
