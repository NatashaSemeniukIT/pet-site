// general
import Form from 'react-bootstrap/Form';

// styles
import styles from './Form.module.scss';

const Password = () => {
  return (
    <Form.Group className='mb-3' controlId='formBasicPassword'>
      <Form.Label className={styles.title}>Password</Form.Label>
      <Form.Control 
        type='password'
        name='password'
        className={styles.input} 
        placeholder="Password"
        require
      />
    </Form.Group>
  )
}

export { Password };
