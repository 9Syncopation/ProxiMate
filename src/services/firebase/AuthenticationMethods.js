import firebase from "firebase";
import firebaseConfig from "./firebaseIndex";

// console.log(auth)
export const authMethods = {
  signup: (email, password, setErrors , setToken) => {
    console.log("signup");
    // debugger
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    //   async to grab the token before saving
      .then(async res => {
          const token = await Object.entries(res.user)[5][1].b
        //   set to local storage
        await localStorage.setItem('token',token)
        // grab from local storage and set to state
        setToken(window.localStorage.token)
        console.log('token', token)
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
