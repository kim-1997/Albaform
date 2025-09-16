import { create } from "zustand";

type Role = "APPLICANT" | "OWNER";

type RoleStore = {
    role: Role;
    setRole: (role: Role) => void;
};

export const useRoleStore = create<RoleStore>((set) => ({
    role: "APPLICANT",
    setRole: (role) => set({ role }),
}));
