import { create } from "zustand";

export type ItemType = {
  id: string;
  sentence: string;
  translate: string;
  lang: string;
  date: string;
  link: string;
};

type ItemCommentType = {
  [key: string]: string;
};

interface BearState {
  list: ItemType[];
  commentById: ItemCommentType;
  actions: {
    setList: (list: ItemType[]) => void;
    setCommentById: (id: string, comment: string) => void;
  };
}

const useBearStore = create<BearState>()((set) => ({
  list: [],
  commentById: {},
  actions: {
    setList: (list) => set((state) => ({ ...state, list })),
    setCommentById: (id, comment) =>
      set((state) => {
        const old = state.commentById[id];
        if (!old)
          return {
            list: { ...state.list },
            commentById: { ...state.commentById, [id]: comment },
          };
        return state;
      }),
  },
}));

export default useBearStore;
