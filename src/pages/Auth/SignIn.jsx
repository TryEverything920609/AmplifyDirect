import { useState, useEffect, useContext } from 'react';
import logo1 from '../../assets/images/OAuth/Amazon.png';
import logo2 from '../../assets/images/OAuth/Apple.svg';
import logo3 from '../../assets/images/OAuth/Facebook.svg';
import logo4 from '../../assets/images/OAuth/Google.png';
import {
    Layout,
    Button,
    Typography,
    Card,
    Form,
    Input,
    Checkbox,
} from 'antd';
import { Link } from 'react-router-dom';
import { Auth, DataStore } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
const { Title } = Typography;
const { Content } = Layout;

function SignIn() {
    
    const [data, setData] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signin = async () => {
        try{
            const user = await Auth.signIn(email, password);
            // navigator("/")
        }catch(error){
            console.log('error sign in', error);
        }
    }

    return (        
        <>
            <Layout className='layout-default ant-layout layout-sign-up'>
                <Content className='p-0'>
                    <div className='sign-up-header'>
                        <div className='content'>
                            <Title>Sign In</Title>
                        </div>
                    </div>
                    <Card
                        className='card-signup header-solid h-full ant-card pt-0'
                        title = {<h5>Sign In With</h5>}
                        bordered="false"
                    >
                        <div className="sign-up-gateways">
                            <Button type="false" onClick={() => Auth.federatedSignIn({ provider : CognitoHostedUIIdentityProvider.Amazon })}>
                                <img src={logo1} alt="logo 1" />
                            </Button>
                            <Button type="false" onClick={() => Auth.federatedSignIn({ provider : CognitoHostedUIIdentityProvider.Apple })}>
                                <img src={logo2} alt="logo 2" />
                            </Button>
                            <Button type="false" onClick={() => Auth.federatedSignIn({ provider : CognitoHostedUIIdentityProvider.Facebook })}>
                                <img src={logo3} alt="logo 3" />
                            </Button>
                            <Button type="false" onClick={() => Auth.federatedSignIn({ provider : CognitoHostedUIIdentityProvider.Google })}>
                                <img src={logo4} alt="logo 4" />
                            </Button>
                        </div>
                        <p className='text-center my-25, font-semibold text-muted'>Or</p>
                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            className="row-col"
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    { required: true, message: "Please input your email!" },
                                    { type: 'email', message: "Please Correct Email"}
                                ]}
                            >
                                <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    { required: true, message: "Please input your password!" },
                                ]}
                            >
                                <Input.Password placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value); console.log(password)}}/>
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>
                                    I agree the{" "}
                                    <a href="#pablo" className="font-bold text-dark">
                                    Terms and Conditions
                                    </a>
                                </Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    style={{ width: "100%" }}
                                    type="primary"
                                    htmlType="submit"
                                    onClick={() => signin()}
                                >
                                    SIGN IN
                                </Button>
                            </Form.Item>
                        </Form>
                        <p className="font-semibold text-muted text-center">
                            Already have an account?{" "}
                            <Link to="/signup" className="font-bold text-dark">
                                Sign Up
                            </Link>
                        </p>
                    </Card>
                </Content>
            </Layout>
        </>
    )
}

export default SignIn;