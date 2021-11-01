import firebaseAuthentication from "../Context/Firebase/firebaseInit";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
} from "firebase/auth";
import { useState, useEffect } from "react";

firebaseAuthentication();

const useFirebase = () => {
  //state declare for user
  const [user, setUser] = useState([]);

  // state declare  for email
  const [email, setEmail] = useState("");

  //   state declare  for password
  const [password, setPassword] = useState("");

  //   state for handling error
  const [err, setErr] = useState("");

  //state for name change
  const [name, setName] = useState("");

  //state declare for login or sign up
  const [isLogIn, setIsLogIn] = useState(false);

  //state declare for reload issue
  const [isLoading, setIsLoading] = useState(true);

  //get email form value form user
  const emailFormValue = (email) => {
    setEmail(email);
  };
  //get password form value form user
  const passwordFormValue = (password) => {
    if (password.length < 6) {
      setErr("Password must be 6 character");
      return;
    } else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setErr("Password Must contain 2 upper case");
      return;
    } else {
      setPassword(password);
    }
  };

  //get name form value
  const nameFormValue = (name) => {
    setName(name);
  };

  // get checkbox felid value

  const checkBoxFelidValue = (state) => {
    setIsLogIn(state);
  };

  const auth = getAuth();

  //login

  const processLogin = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);

        setErr("");
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setErr(error.message);
      });
  };

  //get user name
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then((result) => {});
  };

  //   create user using email and password
  const createNewUser = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setErr("");
        emailVerification();
        setUserName();
        // console.log(user);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setErr(error.message);
      });
  };

  // google log in
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const GoogleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        setUser(user);
      })

      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setErr(error.message);
      });
  };
  //observer user state change
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }

      setIsLoading(false);
    });

    return () => unSubscribed;
  }, [auth]);

  //verified a user by sending email

  const emailVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      setErr(" Verification Email Sent.Please Reload After Verification");
    });
  };

  // logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    emailFormValue,
    passwordFormValue,
    createNewUser,
    err,
    checkBoxFelidValue,
    isLogIn,
    processLogin,
    nameFormValue,
    user,
    logOut,
    isLoading,
    signInUsingGoogle,
  };
};

export default useFirebase;
