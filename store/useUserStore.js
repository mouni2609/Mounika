import { create } from 'zustand';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

// Listen to Firebase auth state changes
onAuthStateChanged(auth, (user) => {
  useUserStore.getState().setUser(user);
});

export default useUserStore;
