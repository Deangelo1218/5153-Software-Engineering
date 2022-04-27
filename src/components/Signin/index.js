import React from 'react'
import { Container, FormLabel } from 'react-bootstrap'
import { FormButton, FormContent, FormH1, FormInput, FormWrap, Icon, Form, Text } from './SigninElements'

const Signin = () => {
  return (
      <Container>
          <FormWrap>
              <Icon to="/">Sauté</Icon>
              <FormContent>
                  <Form action="#">
                      <FormH1>Login to your accout</FormH1>
                      <FormLabel htmlFor='for'>Email</FormLabel>
                      <FormInput type='email' required/>
                      <FormLabel htmlFor='for'>Password</FormLabel>
                      <FormInput type='password' required/>
                      <FormButton type='submit'>Continue</FormButton>
                      <Text>Forget password?</Text>      
                  </Form>
              </FormContent>
          </FormWrap>
      </Container>
      
    
  )
}

export default Signin;
