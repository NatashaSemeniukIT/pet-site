// general
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// components
import { Email } from './Email';
import { Password } from './Password';

// styles
import styles from './Form.module.scss';

function FormSignIn () {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Form className={styles.form}>
      <Email />
      <Password />
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button 
        variant="primary" 
        type="submit"
        className={styles.button}
        onClick={(e) => handleSubmit(e)}
      > 
        SignIn
      </Button>
    </Form>
  );
}

export { FormSignIn };
