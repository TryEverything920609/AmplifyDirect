import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { Row, Col, Card, Button, message, Input } from "antd";
const PasswordPage = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function ChangePassword() {
    if (newPassword === confirmPassword) {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const data = await Auth.changePassword(user, password, newPassword);
        console.log(data);
        message.success("Reset password successfully");
      } catch (error) {
        console.log(error);
        message.error(error.message);
      }
    } else {
      message.error("New password and confirm password do not match");
    }
  }

  return (
    <div>
      <Card title="Password Setting">
        <Row gutter={[24, 0]}>
          <Col span={24} md={12}>
            <Input.Password
              placeholder="Cureent Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: "15px" }}
            />
            <Input.Password
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
            <Input.Password
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
          </Col>
          <Col span={24} md={12}>
            <h5
              style={{
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "1.5",
                textTransform: "none",
                marginTop: "-10px",
              }}
            >
              Password requirements
            </h5>
            <p>Ensure that these requirements are met: </p>
            <div
              style={{
                diplay: "flex",
                flexDirection: "column",
                marginTop: "16px",
              }}
            >
              <div
                style={{ alignItems: "center", gap: "8px", display: "flex" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    flexShrink: "0",
                    borderRadius: "50%",
                    backgroundColor: "rgb(25, 118, 210)",
                  }}
                ></div>
                <div style={{ fontSize: "13px" }}>
                  Minimum 8 characters long - the more, the better
                </div>
              </div>
            </div>
            <div
              style={{
                diplay: "flex",
                flexDirection: "column",
                marginTop: "16px",
              }}
            >
              <div
                style={{ alignItems: "center", gap: "8px", display: "flex" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    flexShrink: "0",
                    borderRadius: "50%",
                    backgroundColor: "rgb(25, 118, 210)",
                  }}
                ></div>
                <div style={{ fontSize: "13px" }}>
                  At least one lowercase character
                </div>
              </div>
            </div>
            <div
              style={{
                diplay: "flex",
                flexDirection: "column",
                marginTop: "16px",
              }}
            >
              <div
                style={{ alignItems: "center", gap: "8px", display: "flex" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    flexShrink: "0",
                    borderRadius: "50%",
                    backgroundColor: "rgb(25, 118, 210)",
                  }}
                ></div>
                <div style={{ fontSize: "13px" }}>
                  At least one uppercase character
                </div>
              </div>
            </div>
            <div
              style={{
                diplay: "flex",
                flexDirection: "column",
                marginTop: "16px",
              }}
            >
              <div
                style={{ alignItems: "center", gap: "8px", display: "flex" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    flexShrink: "0",
                    borderRadius: "50%",
                    backgroundColor: "rgb(25, 118, 210)",
                  }}
                ></div>
                <div style={{ fontSize: "13px" }}>
                  At least one number, symbol, or whitespace character
                </div>
              </div>
            </div>
          </Col>
          <Button type="primary" onClick={() => ChangePassword()}>
            Change Password
          </Button>
        </Row>
      </Card>
    </div>
  );
};

export default PasswordPage;
