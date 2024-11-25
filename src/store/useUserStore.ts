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
  userQuery: {},
  setRoleId: (roleId: number) =>
    set((store) => ({ userQuery: { ...store.userQuery, roleId } })),
  setSearchText: (searchText) => set(() => ({ userQuery: { searchText } })),
}));

export default useUserQueryStore;
