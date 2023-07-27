import Home from "./Section/Home";
import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: "1.5",
        color: "#5f5f5f",
        letterSpacing: "1px",
      }}
    >
      <Card title="Home" bordered={false}>
        <h1>The landing page is being completed.</h1>
        <Button type="primary" onClick={() => navigate("/signin")}>
          SignIn
        </Button>
      </Card>
    </div>
  );
}

export default LandingPage;
