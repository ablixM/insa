import { create } from "zustand";

export interface NavStore {
  activePage: string;
  setActivePage: (page: string) => void;
}

const useStore = create<NavStore>((set) => ({
  activePage: "Dashboard",
  setActivePage: (page) => set({ activePage: page }),
}));

export default useStore;
