import React, { useState, useEffect } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
}
from 'mdb-react-ui-kit';
import { toast, ToastContainer } from 'react-toastify';
import iphone from '../../asset/images/iPhone.svg';
import './Login.css';
import { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigate();
  const notify = (text) => {
    toast(text);
  }

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }
  async function signIn(){
    try{
      console.log(email, password);
      const user = await Auth.signIn(email, password);
      console.log('user:', user);
      notify("Login Success");
      navigator("/dashboard");
    }catch(error){
      console.log('error signin in', error);
      notify("Please check your email and password")
    }
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}>
      <MDBContainer>
        <MDBCard>
          <MDBRow className='g-0'>

            <MDBCol md='6'>
              <MDBCardImage src={ iphone } alt="login form" className='rounded-start w-100'/>
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column' style={{alignItems:'center'}}>

                <div className='d-flex flex-row mt-2'>
                  <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                  <span className="h1 fw-bold mb-0">Logo</span>
                </div>

                <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                  <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} size="lg"/>
                  <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' value={password} onChange={e => setPassword(e.target.value)} size="lg"/>

                <MDBBtn className="mb-4 px-5 w-60" color='dark' onClick={signIn} size='lg'>Login</MDBBtn>
                <a className="small text-muted" href="#!">Forgot password?</a>
                <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/signup" style={{color: '#393f81'}}>Register here</a></p>

                <div className="text-center d-flex flex-row justify-content-center">

                    <p style={{ marginTop: '1rem'}}>or sign in with:</p>

                    <MDBBtn tag='button' color='none' className='mx-3' style={{ color: '#1266f1' }} onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Amazon })}>
                      <MDBIcon fab icon='amazon' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='button' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                      <MDBIcon fab icon='facebook' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='button'  color='none' className='mx-3' style={{ color: '#1266f1' }} onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })}>
                      <MDBIcon fab icon='google' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='button' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                      <MDBIcon fab icon='apple' size="sm"/>
                    </MDBBtn>

                  </div>

              </MDBCardBody>
            </MDBCol>

          </MDBRow>
        </MDBCard>

      </MDBContainer>
      <ToastContainer/>
    </div>
  );
}

export default Login;