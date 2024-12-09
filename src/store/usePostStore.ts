import { create } from "zustand";

export interface PostQuery {
  categories?: string;
  catagoryName?: string;
  searchText?: string;
}

interface PostQueryStore {
  postQuery: PostQuery;
  setCatagoryName: (categories: string) => void;
  setSearchText: (searchText: string) => void;
}

const usePostQueryStore = create<PostQueryStore>((set) => ({
  postQuery: {},
  setSearchText: (searchText) => set(() => ({ postQuery: { searchText } })),
  setCatagoryName: (categories: string) =>
    set((store) => ({ postQuery: { ...store.postQuery, categories } })),
}));

export default usePostQueryStore;
