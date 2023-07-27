import "./asset/styles/main.css";
import "./asset/styles/responsive.css";
import "./App.css";
import { useEffect, useState, useMemo } from "react";
import { useRoutes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Auth, DataStore, Hub } from "aws-amplify";
import { UserProfileList, UserTypeList } from "./models";
import AuthContext from "./context/AuthContext";

const App = () => {
  const pages = useRoutes(AppRoutes);
  const [user, setUser] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  const value = useMemo(
    () => ({
      name,
      setName,
      email,
      setEmail,
      avatar,
      setAvatar,
      phone,
      setPhone,
      role,
      setRole,
    }),
    [name, email, avatar, phone, role]
  );

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
        case "cognitoHostedUI":
          getUser().then((userData) => setUser(userData));
          console.log("Hello, SignIn", user);
          break;
        case "signOut":
          setUser(null);
          break;
        case "signIn_failure":
        case "cognitoHostedUI_failure":
          console.log("Sign in failure", data);
          break;
      }
    });
    getUser().then((userData) => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then((userData) => userData)
      .catch(() => console.log("Not signed in"));
  }

  function saveUser() {
    if (user) {
      const userEmail = user.attributes.email;
      DataStore.query(UserProfileList, (c) => c.Email.eq(userEmail)).then(
        (users) => {
          if (users.length == 0) {
            console.log("User not found");
            setName(user.attributes.Name);
            setEmail(user.attributes.email);
            setRole("USER");
            DataStore.save(
              new UserProfileList({
                Name: user.attributes.name,
                Email: user.attributes.email,
                Role: UserTypeList.USER,
              }).then(() => console.log("Data Save Successful"))
            );
          } else {
            console.log("User found", users[0]);
            setName(users[0].Name);
            setEmail(users[0].Email);
            setRole(users[0].Role);
            setPhone(users[0].PhoneNumber);
            setAvatar(users[0].Avatar);
          }
        }
      );
    }
  }

  useEffect(() => saveUser(), [user]);

  return <AuthContext.Provider value={value}>{pages}</AuthContext.Provider>;
};

export default App;
