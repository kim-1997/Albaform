import { create } from "zustand";

export type UserRole = "owner" | "applicant";

type RoleStore = {
    role: UserRole;
    setRole: (newRole: UserRole) => void;
};

export const useRoleStore = create<RoleStore>((set) => ({
    role: "applicant",
    setRole: (newRole) => set({ role: newRole }),
}));
