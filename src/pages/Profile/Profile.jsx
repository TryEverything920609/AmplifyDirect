import { Auth } from "aws-amplify";
import { useEffect } from "react";
import { Tabs } from "antd";
import {
  UserOutlined,
  LockOutlined,
  CheckSquareOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import PasswordPage from "./PasswordPage";
import TwostepPage from "./TwostepPage";
import BillingPage from "./BillingPage";
import BasicInformationPage from "./BasicInformationPage";
const { TabPane } = Tabs;

export default function Profile() {
  const checkUserSignInMethod = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const providerName =
        user.signInUserSession.idToken.payload.identities[0].providerName;
      if (providerName === "Cogntio") {
        console.log("User logged in with email");
      } else if (providerName === "Google") {
        console.log("User logged in with Google");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkUserSignInMethod();
  }, []);

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
