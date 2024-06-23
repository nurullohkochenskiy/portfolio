

import create from "zustand";

interface ShowContentState {
  showContent: boolean;
  setShowContent: (value: boolean) => void;
}

export const useShowContentStore = create<ShowContentState>((set) => ({
  showContent: false,
  setShowContent: (value) => set({ showContent: value }),
}));
