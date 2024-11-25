import { create } from "zustand";

export interface UserQuery {
  roleId?: number;
  searchText?: string;
}

interface UserQueryStore {
  userQuery: UserQuery;
  setRoleId: (roleId: number) => void;
  setSearchText: (searchText: string) => void;
}

const useUserQueryStore = create<UserQueryStore>((set) => ({
  userQuery: {
    roleId: null, // Default role filter
    searchText: "", // Default search text
  },
  setRoleId: (roleId: number) =>
    set((store) => ({ userQuery: { ...store.userQuery, roleId } })),
  setSearchText: (searchText) =>
    set((state) => ({ userQuery: { ...state.userQuery, searchText } })),
}));

export default useUserQueryStore;
