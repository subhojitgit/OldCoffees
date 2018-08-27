import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const LoginForm = () => (
  <Form>
    <Form.Field width={2}>
      <input placeholder='User Name' />
    </Form.Field>
    <Form.Field width={2}>
      <input placeholder='Password' type='password'/>
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default LoginForm;
