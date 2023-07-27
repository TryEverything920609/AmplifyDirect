import { createContext } from "react";
const AuthContext = createContext({
  email: "",
  setEmail: () => {},
  name: "",
  setName: () => {},
  phone: "",
  setPhone: () => {},
  role: "",
  setRol: () => {},
  avatar: "",
  setAvatar: () => {},
});
export default AuthContext;
