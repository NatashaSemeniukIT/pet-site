// general
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

//components
import { Nav } from '../../Navigation/Nav';
import { Search } from '../../buttons/Search/Search';
import { ButtonsBackground } from '../../buttons/ButtonsBackground/ButtonsBackground';
import { FormJoinNow } from '../../Form/FormJoinNow';
import { FormSignIn } from '../../Form/FormSignIn';
import { Logo } from '../../Logo/Logo';

// styles
import styles from './Header.module.scss';

const Header = () => {
  const [showFormJoinNow, setShowFormJoinNow] = useState(false);
  const [showFormSignIn, setShowFormSignIn] = useState(false);

  const hideFormJoin = () => setShowFormJoinNow(false);
  const showFormJoin = () => setShowFormJoinNow(true);

  const hideFormSign = () => setShowFormSignIn(false);
  const showFormSign = () => setShowFormSignIn(true);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Nav />
        <Search />
        <ButtonsBackground />
        <div className={styles.croup_buttons}>
          <Button 
            variant='danger'
            className={styles.button_danger}
            onClick={showFormJoin}
          >
            join now
          </Button>
          <Button 
            variant='secondary' 
            className={styles.button_secondary}
            onClick={showFormSign}
          >
            sign in
          </Button>
        </div>
        <Modal 
          show={showFormJoinNow} 
          onHide={hideFormJoin}
          backdrop='static'        
        >
          <Modal.Header closeButton>
            <Modal.Title className={styles.modal_title}>Join Now</Modal.Title>
          </Modal.Header>
          <Modal.Body>   
            <FormJoinNow />
          </Modal.Body>
          <Modal.Footer>
          <Button 
            variant="secondary" 
            className={styles.btn_close} 
            onClick={hideFormJoin}
          >
            Close
          </Button>
          </Modal.Footer>
        </Modal>

        <Modal 
          show={showFormSignIn} 
          onHide={hideFormSign} 
          backdrop='static' 
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className={styles.modal_title}>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>   
            <FormSignIn/>
          </Modal.Body>
          <Modal.Footer>
          <Button 
            variant="secondary" 
            className={styles.btn_close} 
            onClick={hideFormSign}
          >
            Close
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </header>
  )
}

export { Header };
