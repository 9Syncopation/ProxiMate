import firebase from "firebase";
import firebaseConfig from "./firebaseIndex";

// console.log(auth)
export const authMethods = {
  signup: (email, password, setErrors) => {
    console.log("signup");
    // debugger
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res, "this is res");
      })
      .catch((err) => {
        console.log("error>>>", err);
        setErrors((prev) => [...prev, err.message]);
      });
  },
  signin: (email, password) => {
    console.log("SIGNIN");
  },
  signout: (email, password) => {
    console.log("sign out");
  },
};
