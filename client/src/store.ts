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
  contentById: ItemCommentType;
  actions: {
    setList: (list: ItemType[]) => void;
    setContentById: (id: string, comment: string) => void;
  };
}

const useBearStore = create<BearState>()((set) => ({
  list: [],
  contentById: {},
  actions: {
    setList: (list) => set((state) => ({ ...state, list })),
    setContentById: (id, comment) =>
      set((state) => {
        const old = state.contentById[id];
        if (!old)
          return {
            list: { ...state.list },
            contentById: { ...state.contentById, [id]: comment },
          };
        return state;
      }),
  },
}));

export default useBearStore;
