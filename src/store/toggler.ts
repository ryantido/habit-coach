import type { Toggler } from "@/types";
import { create } from "zustand";

export const useToggler = create<Toggler>((set) => ({
  isDrawerOpen: true,
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
}));
