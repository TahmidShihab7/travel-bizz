import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confiq";

const firebaseAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default firebaseAuthentication;
