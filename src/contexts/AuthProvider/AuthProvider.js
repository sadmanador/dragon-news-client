import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const loggingOut = () => {
    signOut(auth);
  };

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const userLogIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const updateDisplayName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => setError(error));
  };

  const authInfo = {
    user,
    providerLogin,
    loggingOut,
    createUser,
    userLogIn,
    updateDisplayName,
    setLogin,
    setRegister,
    login,
    register,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
