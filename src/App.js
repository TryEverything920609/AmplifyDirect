import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import { createContext, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Auth, DataStore, Hub } from "aws-amplify";
import { UserProfileList, UserTypeList } from './models';

const App = () => {

  const pages = useRoutes(AppRoutes);
  const UserContext = createContext();  
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', ({payload: {event, data}}) => {
      switch(event){
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          console.log("Hello, SignIn");
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });
    getUser().then(userData => setUser(userData))
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }

  function saveUser () {
    if(user){
      const userEmail = user.attributes.email;
      DataStore.query(UserProfileList, (c) => c.Email.eq(userEmail))
      .then((users) => {
        if(users.length == 0){
          console.log("User not found")
          DataStore.save(
            new UserProfileList({
              "Name":user.attributes.name,
              "Email": user.attributes.email,
              "Role": UserTypeList.USER
            }).then(() => console.log('Data Save Successful'))
          )
        }
        else{
          console.log("User found");
        }
      })
    }
  }

  useEffect(() => saveUser(), [user]);

  return(
    <UserContext.Provider>{pages}</UserContext.Provider>
  )
}

export default App;
