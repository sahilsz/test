import { User } from '@/type/api';
import { createStore } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type UserStore = {
  user: User | null; // User state, initialized to null
  updateUser: (user: User) => void; // Function to update the user
  deleteUser: () => void; // Function to delete the user
};

export const useUser = createStore<UserStore>()(
  persist(
    (set) => ({
      user: null, // Initial state of user
      updateUser: (user) => set({ user }), // Update the user state
      deleteUser: () => set({ user: null }), // Clear user state
    }),
    {
      name: 'user-storage', // Unique name for the storage item
      storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
    },
  ),
);
