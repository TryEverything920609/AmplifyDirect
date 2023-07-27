import { Card, Switch, Button, Input } from "antd";

const TwostepPage = () => {
  return (
    <div>
      <Card
        title={
          <div>
            <div>
              <h5>Two-step verification</h5>
              <Switch />
            </div>
            <div>
              <p>
                Start by entering your password so that we know it's you. Then
                we'll walk you throught two more simple steps.
              </p>
            </div>
          </div>
        }
      >
        <Input.Password
          placeholder="Enter Current Password"
          style={{ marginBottom: "10px" }}
        />
        <Button type="primary">Save Changes</Button>
      </Card>
    </div>
  );
};

export default TwostepPage;
