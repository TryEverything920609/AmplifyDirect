import { Auth } from "aws-amplify";
import { useEffect } from "react";
export default function Setting() {
    useEffect(()=>{
        try{
            Auth.currentAuthenticatedUser();
            console.log("User Login");
        }catch{
            console.log("redirect");
            navigator('/signin');
        }
      }, []);
}
