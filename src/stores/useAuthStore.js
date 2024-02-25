import { create } from 'zustand';

const useAuthStore = create((set) => ({
  userId: null,
  setUserId: (id) => set({ userId: id }),
}));

export default useAuthStore;
