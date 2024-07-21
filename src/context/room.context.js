import { off, onValue, ref } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import { database } from "../misc/firebase";
import { transformObjectToArray } from "../misc/helpers";

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const roomsRef = ref(database, "rooms");
    onValue(roomsRef, (snap) => {
      const roomsList = transformObjectToArray(snap.val());
      console.log("rooms list:", roomsList);
      setRooms(roomsList);
    });
    return () => {
      off(roomsRef);
    };
  }, []);

  return (
    <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
  );
};

export const useRooms = () => useContext(RoomsContext);
