import { useState } from "react";
import logo1 from "../../asset/images/OAuth/Amazon.png";
import logo2 from "../../asset/images/OAuth/Apple.svg";
import logo3 from "../../asset/images/OAuth/Facebook.svg";
import logo4 from "../../asset/images/OAuth/Google.png";
import {
  Layout,
  Button,
  Typography,
  Card,
  Form,
  Input,
  Checkbox,
  Modal,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Auth, DataStore } from "aws-amplify";
import { UserProfileList, UserTypeList } from "../../models";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
const { Title } = Typography;
const { Content } = Layout;

function SignUp() {
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOk = async () => {
    try {
      await Auth.confirmSignUp(email, code);
      navigator("/signin");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
    setCode("");
    setShowModal(false);
  };

  const handleCancel = () => {
    setCode("");
    setShowModal(false);
  };

  const signup = async () => {
    console.log("SIGN UP");
    try {
      await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          name: name,
        },
      }).then((user) => {
        console.log("Saving");
        DataStore.save(
          new UserProfileList({
            Name: name,
            Email: email,
            Role: UserTypeList.USER,
          })
        ).then(() => console.log("Success Saving"));
      });

      setShowModal(true);
    } catch (error) {
      console.log("error signin up: ", error);
    }
  };
  return (
    <>
      <Layout className="layout-default ant-layout layout-sign-up">
        <Content className="p-0">
          <div className="sign-up-header">
            <div className="content">
              <Title>Sign Up</Title>
            </div>
          </div>
          <Card
            className="card-signup header-solid h-full ant-card pt-0"
            title={<h5>Sign Up With</h5>}
            bordered="false"
          >
            <div className="sign-up-gateways">
              <Button
                type="false"
                onClick={() =>
                  Auth.federatedSignIn({
                    provider: CognitoHostedUIIdentityProvider.Amazon,
                  })
                }
              >
                <img src={logo1} alt="logo 1" />
              </Button>
              <Button
                type="false"
                onClick={() =>
                  Auth.federatedSignIn({
                    provider: CognitoHostedUIIdentityProvider.Apple,
                  })
                }
              >
                <img src={logo2} alt="logo 2" />
              </Button>
              <Button
                type="false"
                onClick={() =>
                  Auth.federatedSignIn({
                    provider: CognitoHostedUIIdentityProvider.Facebook,
                  })
                }
              >
                <img src={logo3} alt="logo 3" />
              </Button>
              <Button
                type="false"
                onClick={() =>
                  Auth.federatedSignIn({
                    provider: CognitoHostedUIIdentityProvider.Google,
                  })
                }
              >
                <img src={logo4} alt="logo 4" />
              </Button>
            </div>
            <p className="text-center my-25, font-semibold text-muted">Or</p>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              className="row-col"
            >
              <Form.Item
                name="Name"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please Correct Email" },
                ]}
              >
                <Input
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
                  onClick={() => signup()}
                >
                  SIGN UP
                </Button>
              </Form.Item>
            </Form>
            <p className="font-semibold text-muted text-center">
              Already have an account?{" "}
              <Link to="/signin" className="font-bold text-dark">
                Sign In
              </Link>
            </p>
          </Card>
        </Content>
      </Layout>
      <Modal
        title="Email Verification"
        open={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder="please confirm verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></Input>
      </Modal>
    </>
  );
}

export default SignUp;
