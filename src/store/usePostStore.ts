import { create } from "zustand";

export interface PostQuery {
  catagoryName?: string;
  searchText?: string;
}

interface PostQueryStore {
  postQuery: PostQuery;
  setCatagoryName: (catagoryName: string) => void;
  setSearchText: (searchText: string) => void;
}

const usePostQueryStore = create<PostQueryStore>((set) => ({
  postQuery: {},
  setSearchText: (searchText) => set(() => ({ postQuery: { searchText } })),
  setCatagoryName: (catagoryName: string) =>
    set((store) => ({ postQuery: { ...store.postQuery, catagoryName } })),
}));

export default usePostQueryStore;
