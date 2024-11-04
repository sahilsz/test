import { createStore } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type House = {
  [key: string]: any; // You can define specific keys and types here
};

// Define the HouseStore type
type HouseStore = {
  house: House;
  updateHouse: (house: House) => void;
};

const useHouseStore = createStore<HouseStore>()(
  persist(
    (set) => ({
      house: {}, // Initial state
      updateHouse: (house) => set({ house }), // Update function
    }),
    {
      name: 'house-storage', // Name of the storage item
      storage: createJSONStorage(() => localStorage), // Using localStorage
    },
  ),
);

export default useHouseStore;
