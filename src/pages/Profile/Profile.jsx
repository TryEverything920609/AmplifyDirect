import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import {
  Tabs,
  Row,
  Col,
  Card,
  Button,
  List,
  Descriptions,
  Avatar,
  Radio,
  Switch,
  Upload,
  message,
  Form,
  Input,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  CheckSquareOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import background1 from "../../assets/images/background-1.jpg";
import defaultAvatar from "../../assets/images/001-man.svg";
import PasswordPage from "./PasswordPage";
import TwostepPage from "./TwostepPage";
import BillingPage from "./BillingPage";
const { TabPane } = Tabs;

export default function Profile() {
  useEffect(() => {
    try {
      Auth.currentAuthenticatedUser();
      console.log("User Login");
    } catch {
      console.log("redirect");
      navigator("/signin");
    }
  }, []);

  const BasicInformationPage = () => {
    return (
      <div style={{ overflow: "hidden" }}>
        <div className="profile-nav-bg" style={{ overflow: "hidden" }}>
          <img src={background1} style={{ width: "100%", height: "100%" }} />
        </div>
        <Card
          className="card-profile-head"
          bodyStyle={{ display: "none" }}
          title={
            <Row
              justify="space-between"
              align="middle"
              gutter={[24, 0]}
              style={{ height: "110px" }}
            >
              <Col span={24} md={12} className="col-info">
                <Avatar.Group>
                  <Avatar size={74} shape="circle" src={defaultAvatar} />
                  <div className="avatar-info">
                    <h4 className="font-semibold m-0">Josh H</h4>
                    <p>Lead FullStack Developer</p>
                  </div>
                </Avatar.Group>
              </Col>
              <Col
                span={24}
                md={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "",
                }}
              >
                <Button color="primary">Upload</Button>
              </Col>
            </Row>
          }
        ></Card>
        <Card title="Basic Information">
          <Form>
            <Row gutter={[24, 0]}>
              <Col span={24} md={12}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
              </Col>
              <Col span={24} md={12}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
                    },
                  ]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
              </Col>
              <Col span={24} md={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={24} md={12}>
                <Form.Item
                  label="Phone"
                  name="Phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input placeholder="Phone" />
                </Form.Item>
              </Col>
              <Form.Item>
                <Button>Change</Button>
              </Form.Item>
            </Row>
          </Form>
        </Card>
      </div>
    );
  };

  const TwoStepVerification = () => {
    return <div>Two-step verification</div>;
  };

  const Billing = () => {
    return <div>Billing</div>;
  };

  return (
    <div>
      <Tabs defaultActiveKey="1" tabPosition="top" style={{ height: 220 }}>
        <TabPane
          tab={
            <span>
              <UserOutlined />
              Basic Information
            </span>
          }
          key="1"
        >
          <BasicInformationPage />
        </TabPane>

        <TabPane
          tab={
            <span>
              <LockOutlined />
              Password
            </span>
          }
          key="2"
        >
          <PasswordPage />
        </TabPane>
        <TabPane
          tab={
            <span>
              {" "}
              <CheckSquareOutlined />
              Two-step verification
            </span>
          }
          key="3"
        >
          <TwostepPage />
        </TabPane>
        <TabPane
          tab={
            <span>
              <DollarOutlined />
              Billing
            </span>
          }
          key="4"
        >
          <BillingPage />
        </TabPane>
      </Tabs>
    </div>
  );
}
