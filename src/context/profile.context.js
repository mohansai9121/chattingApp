import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, database } from "../misc/firebase";
import { ref, onValue, off } from "firebase/database";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let newRef;
    const authUnsub = onAuthStateChanged(auth, (authObj) => {
      if (authObj) {
        newRef = ref(database, `profile/${authObj.uid}`);
        onValue(newRef, (snap) => {
          console.log("snapValue:", snap.val());
          const { CreatedAt, Email, name, recentLogin } = snap.val();
          let userData = {
            uid: authObj.uid,
            lastLogin: recentLogin,
            name: name,
            email: Email,
            createdAt: CreatedAt,
          };
          setProfile(userData);
          setIsLoading(false);
        });
      } else {
        if (newRef) {
          off(newRef);
        }
        setProfile(null);
        setIsLoading(false);
      }
    });
    return () => {
      authUnsub();
      if (newRef) {
        off(newRef);
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
