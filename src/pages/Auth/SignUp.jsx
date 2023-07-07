import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
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
  MDBCheckbox,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
}
from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import iphone from '../../asset/images/iPhone.svg';
import './Login.css';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

function SignUp() {

  const googleOauthUrl = 'https://directdial.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=5cib1l1iq251m1vhjpk4abj4ha&response_type=token&scope=email+openid+profile&redirect_uri=https%3A%2F%2Fmain.d2wkzq2wyfkbd2.amplifyapp.com%2Fdashboard';
  const navigator = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const toggleShow = () => setShowConfirm(!showConfirm);
  const notify = (text) => {
    toast(text);
  }

  async function EmailSignUp(){
    console.log('email = >', email);
    console.log('password => ', password);
    try{
      await Auth.signUp({
        username: email,
        password: password
      });
      notify("Success")
      toggleShow();
    }catch(error){
      console.log('error signing up:', error);
      notify("Please Set your password Strong")
    }
  }

  async function confirm(){
    try{
      console.log(email, 'email');
      await Auth.confirmSignUp(email, code);
      notify("success");
      navigator("/login");
    }catch(error){
      console.log(error);
      notify("Please check your verification code");
    }
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}>
      <MDBContainer>
        <MDBCard>
          <MDBRow className='g-0'>
            <MDBCol md='6'>
              <MDBCardImage src = {iphone} alt="login form" className='rounded-start w-100'/>
            </MDBCol>

            <MDBCol md='6'>
              <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
                <MDBCardBody className='p-5 shadow-5 text-center'>

                  <h2 className="fw-bold mb-5">Sign up now</h2>
                  <MDBInput wrapperClass='mb-4' value={email} label='Email' id='emailInput' type='email' onChange={e=>setEmail(e.target.value)}/>
                  <MDBInput wrapperClass='mb-4' value={password} label='Password' id='passwordInput' type='password' onChange={e => setPassword(e.target.value)}/>

                  <div className='d-flex justify-content-center mb-4'>
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                  </div>

                  <MDBBtn className='w-60 mb-4' size='md' onClick={EmailSignUp}>sign up</MDBBtn>

                  <div className="text-center">

                    <p>or sign in with:</p>

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
              </MDBCard>
            </MDBCol>

          </MDBRow>
        </MDBCard>

      </MDBContainer>
      <MDBModal tabIndex='-1' show={showConfirm} setShow={setShowConfirm}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Confirm Verify Code</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput label= 'Verify Code' id='verifycodeInput' type='text' value={code} onChange={e=>setCode(e.target.value)}/>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={confirm}>Confirm</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <ToastContainer/>
    </div>
  );
}

export default SignUp;