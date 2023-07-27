import { useState } from "react";
import {
  Layout,
  Button,
  Typography,
  Card,
  Form,
  Input,
  Modal,
  message,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
const { Title } = Typography;
const { Content } = Layout;

function ForgotPassword() {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOk = async () => {
    try {
      await Auth.forgotPasswordSubmit(email, code, password);
      message.success("Success reset password!");
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

  const forgetPassword = async () => {
    console.log("forgetPassword");
    try {
      await Auth.forgotPassword(email);
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
              <Title>Forgot Password</Title>
            </div>
          </div>
          <Card
            className="card-signup header-solid h-full ant-card pt-0"
            title={<h5>Reset Password</h5>}
            bordered="false"
          >
            <Form
              name="basic"
              initialValues={{ remember: true }}
              className="row-col"
            >
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

              <Form.Item>
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  htmlType="submit"
                  onClick={() => forgetPassword()}
                >
                  Reset Password
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
        title="Reset Password Confirm"
        open={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder="please confirm verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{ marginBottom: "10px" }}
        />

        <Input
          placeholder="please input new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Modal>
    </>
  );
}

export default ForgotPassword;
