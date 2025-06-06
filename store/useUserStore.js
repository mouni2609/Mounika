import { create } from "zustand";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";  

const useUserStore = create((set) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      set({ user });
    } else {
      set({ user: null });
    }
  });

  return {
    user: null,
    setUser: (user) => set({ user }),
     clearUser: () => set({ user: null }),
  };
});

export default useUserStore;