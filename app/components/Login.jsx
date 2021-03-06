import React from 'react'
import { Navbar, Component, FormGroup, FormControl, Button } from 'react-bootstrap';



export const Login = ({ login }) => (
  <form onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)}}
  >
    <Navbar.Form pullRight>
    <div className='margTop8'>
          <input id='email' className='form-control input-xs' type="text" name='username' placeholder="email" />
          <input id='pwd' className='form-control input-xs' placeholder="password" name='password' type='password' />

      <Button id='loginButton' className='btn btn-info btn-xs'  type="submit">Login</Button>
			<a href="/api/auth/login/facebook" className="btn btn-info btn-xs">Login With Facebook</a>
			<a href="/api/auth/login/google" className="btn btn-info btn-xs">Login With Google</a>
			<a href="/api/auth/login/twitter" className="btn btn-info btn-xs">Login With Twitter</a>
    </div>
    </Navbar.Form>
  </form>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
