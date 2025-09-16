import { create } from "zustand";
import { User } from "@/lib/types/auth";
import { persist } from "zustand/middleware";

type UserStore = {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    setUser: (user: User, accessToken: string, refreshToken: string) => void;
    logout: () => void;
};

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,
            refreshToken: null,
            setUser: (user, accessToken, refreshToken) => set({ user, accessToken, refreshToken }),
            logout: () => set({ user: null, accessToken: null, refreshToken: null }),
        }),
        {
            name: "user-storage",
        }
    )
);
