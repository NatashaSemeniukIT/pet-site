import Form from 'react-bootstrap/Form'; 

import styles from './Form.module.scss';

const Email = () => {
  return (
    <Form.Group className='mb-3' controlId='formBasicEmail'>
      <Form.Label className={styles.title}>Email address</Form.Label>
      <Form.Control 
        type='email'
        name='email'
        className={styles.input}
        placeholder="name&#64;example.com"
        require
      />
    </Form.Group>
  )
}

export { Email };
