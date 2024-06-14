import { create } from "zustand";

type State = {
    status: boolean
}

type Action = {
    updateStatus: () => void
}

export const useMenuStore = create<State & Action>((set) => ({
    status: false,
    updateStatus: () => set((state) => ({ status: !state.status }))
}))