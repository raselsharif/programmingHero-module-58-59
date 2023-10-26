import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase.confic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const registerEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserName = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const signInEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    registerEmailPass,
    updateUserName,
    signInEmailPass,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
