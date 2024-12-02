import { create } from "zustand";

export interface UserQuery {
  role?: string;
  searchText?: string;
}

interface UserQueryStore {
  userQuery: UserQuery;
  setRole: (role: string) => void;
  setSearchText: (searchText: string) => void;
}

const useUserQueryStore = create<UserQueryStore>((set) => ({
  userQuery: {},
  setRole: (role: string) =>
    set((store) => ({ userQuery: { ...store.userQuery, role } })),
  setSearchText: (searchText) => set(() => ({ userQuery: { searchText } })),
}));

export default useUserQueryStore;
