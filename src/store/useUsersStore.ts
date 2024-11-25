import { create } from "zustand";

type UserState = {
  username: string | null;
  email: string | null;
  setUser: (user: { username: string | null; email: string | null }) => void;
};

export const useUsersStore = create<UserState>((set) => ({
  username: null,
  email: null,
  setUser: (user) => set(user),
}));
