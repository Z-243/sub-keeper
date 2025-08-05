"use client";

import { auth, db } from "@/firebase";
import { subscriptions } from "@/utils";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const { children } = props;

  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    setCurrentUser(null);
    setUserData(null);
    return signOut(auth);
  }

  async function saveToFirebase(data) {
    try {
      const userRef = doc(db, "users", currentUser.uid);
      const res = await setDoc(
        userRef,
        {
          subscriptions: data,
        },
        { merge: true }
      );
    } catch (err) {
      console.log(err.message);
    }
  }

  async function handleAddSubscription(newSubscription) {
    if (userData.subscriptions.length > 30) {
      return;
    }

    setAdding(true); // Start loading

    try {
      const newSubscriptions = [...userData.subscriptions, newSubscription];
      setUserData({ subscriptions: newSubscriptions });

      await saveToFirebase(newSubscriptions);
    } catch (err) {
      console.error("Error saving subscription:", err.message);
    } finally {
      setAdding(false); // Stop loading
    }
  }

  async function handleDeleteSubscription(index) {
    const newSubscriptions = userData.subscriptions.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setUserData({ subscriptions: newSubscriptions });

    await saveToFirebase(newSubscriptions);
  }

  const value = {
    currentUser,
    userData,
    loading,
    signup,
    login,
    logout,
    handleAddSubscription,
    handleDeleteSubscription,
    adding,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        setCurrentUser(user);

        if (!user) {
          setLoading(false);
          return;
        }
        setLoading(true);

        // user found, now check database
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        console.log("fetching user data...");

        let firebaseData = { subscriptions: [] };
        if (docSnap.exists()) {
          console.log("Found user data");
          firebaseData = docSnap.data();
        }
        setUserData(firebaseData);
      } catch (err) {
        console.log("Error fetching user data: ", err.message);
      } finally {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
