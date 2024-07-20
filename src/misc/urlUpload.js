import { ref, set } from "firebase/database";
import { database } from "./firebase";
import { useProfile } from "../context/profile.context";

export function useURLToDataBase(url) {
  const { profile } = useProfile();
  const userUrlRef = ref(database, `profile/${profile.uid}/avatar`);
  set(userUrlRef, url);
}
