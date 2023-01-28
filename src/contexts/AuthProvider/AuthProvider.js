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
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(false);

  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const loggingOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password);
  };

  const updateDisplayName = (name, photoUrl) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {})
      .catch((error) => setError(error));
  };

  const handleChecked = event => {
    setChecked(event.target.checked);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

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
    error,
    loading,
    setLoading,
    checked,
    setChecked,
    handleChecked
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
