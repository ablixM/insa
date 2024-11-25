import { create } from "zustand";

export interface PostQuery {
    catagoryId?: number;
    searchText?: string;
}

interface PostQueryStore {
    postQuery: PostQuery;
    setCatagoryId: (catagoryId: number) => void;
    setSearchText: (searchText: string) => void;
}

const usePostQueryStore = create<PostQueryStore>((set) => ({ 
    postQuery: {},
    setSearchText: (searchText) => set(() => ({ postQuery: {  searchText } })),
    setCatagoryId: (catagoryId: number) => set((store) => ({ postQuery: { ...store.postQuery, catagoryId } })),
}));

export default usePostQueryStore;