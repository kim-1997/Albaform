"use client";

import SignupForm from "@/components/Signup/SignupForm";
import { signupUser } from "@/lib/api/signup";
import { SignUp } from "@/lib/types/signup";
import { useRoleStore } from "@/stores/roleStore";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const { role } = useRoleStore();
    const handleLogin = async (form: SignUp) => {
        try {
            await signupUser({ ...form, role });
            alert("회원가입 성공!");
            router.push("/signin/owner");
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                console.error("회원가입 실패:", err.response?.data);
            } else {
                console.error("회원가입 실패:", err);
            }
        }
    };
    return <SignupForm onSubmit={handleLogin} role={role} />;
}
