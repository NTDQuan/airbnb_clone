import { create } from 'zustand'

const useUserData = create((set) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    onLogin: (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        set({ user: userData });
    },
    onLogout: () => {
        localStorage.removeItem('user');
        set({ user: null });
    }
}));

export default useUserData;