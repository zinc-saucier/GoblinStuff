import { create } from "zustand";

// 1. Define the shape of the state
interface UserState {
  user: string;
  id: string;
  setUser: (newName: string, newID: string) => void;
}

interface SearchState {
  searchTerm: string;
  setSearchTerm: (newTerm: string) => void;
}

// 2. Apply the interface to the store
export const useUserStore = create<UserState>((set) => ({
  user: "",
  id: "",
  setUser: (newName, newID) => set({ user: newName, id: newID }),
}));

export const useSearchStore = create<SearchState>((set) => ({
  searchTerm: "",
  setSearchTerm: (newTerm) => set({ searchTerm: newTerm }),
}));
