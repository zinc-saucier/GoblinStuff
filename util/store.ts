import { MagicItem } from "@/app/components/item";
import { create } from "zustand";

// 1. Define the shape of the state
interface UserState {
  user: string;
  id: string;
  cart: MagicItem[] | null,
  setUser: (newName: string, newID: string, newCart: MagicItem[] | null) => void;
}

interface SearchState {
  searchTerm: string;
  setSearchTerm: (newTerm: string) => void;
}

// 2. Apply the interface to the store
export const useUserStore = create<UserState>((set) => ({
  user: "",
  id: "",
  cart: [],
  setUser: (newName, newID, newCart ) => set({ user: newName, id: newID, cart: newCart}),
}));

export const useSearchStore = create<SearchState>((set) => ({
  searchTerm: "",
  setSearchTerm: (newTerm) => set({ searchTerm: newTerm }),
}));
