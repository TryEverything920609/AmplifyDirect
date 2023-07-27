import { Card, Switch, Button } from "antd";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
const TwostepPage = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(async (userData) => {
        const data = await Auth.getPreferredMFA(userData, {
          bypassCache: false,
        });
        console.log("Current preferred MFA type is: " + data);
        if (data === "NOMFA") setChecked(false);
      })
      .catch(() => console.log("Not signed in"));
  }, []);

  const setMFAType = async () => {
    console.log(checked);
    try {
      if (checked) {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.setPreferredMFA(user, "SMS");
      } else {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.setPreferredMFA(user, "NOMFA");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Card
        title={
          <div>
            <div>
              <h5>Two-step verification</h5>
              <Switch onChange={() => setChecked(!checked)} checked={checked} />
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
        <Button type="primary" onClick={() => setMFAType()}>
          Save Changes
        </Button>
      </Card>
    </div>
  );
};

export default TwostepPage;
