// general
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// components
import { Email } from './Email';
import { Password } from './Password';

// styles
import styles from './Form.module.scss';

function FormJoinNow () {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Form className={styles.form}>
      <Form.Label className={styles.title}>Name</Form.Label>
      <Form.Control 
        type="text" 
        name="name" 
        className={styles.input} 
      />
      <Form.Label className={styles.title}>Surname</Form.Label>
      <Form.Control 
        type='text' 
        name='surname' 
        className={styles.input}
      />
      <Email />
      <Password />
      <Form.Group className='mb-3 check' controlId='formBasicCheckbox'>
        <Form.Check 
          type='checkbox' 
          label='Check me out' 
          className={styles.checkbox}
        />
      </Form.Group>
      <Button 
        variant='primary' 
        type='submit'
        value='submit'
        className={styles.button}
        onClick={(e) => handleSubmit(e)}
      > 
        Join Now
      </Button>
    </Form>
  );
}

export { FormJoinNow };
