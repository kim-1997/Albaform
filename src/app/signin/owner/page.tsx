"use client";

import LoginForm from "@/components/Login/LoginForm";
import { signinUser } from "@/lib/api/signin";
import { SignIn } from "@/lib/types/signin";
import { useRoleStore } from "@/stores/roleStore";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "next/navigation";

export default function OwnerSigninPage() {
    const router = useRouter();
    const { role } = useRoleStore();
    const setUser = useUserStore((state) => state.setUser);

    const handleSignin = async (form: SignIn) => {
        try {
            const res = await signinUser(form);
            if (res.user.role !== "OWNER") {
                alert("사장님 계정만 로그인 가능합니다.");
                return;
            }

            localStorage.setItem("accessToken", res.accessToken);
            localStorage.setItem("refreshToken", res.refreshToken);

            alert("로그인 성공");
            setUser(res.user, res.accessToken, res.refreshToken);
            router.push("/");
        } catch (err) {
            console.error("로그인 실패:", err);
        }
    };

    return <LoginForm onSubmit={handleSignin} role={role} />;
}
