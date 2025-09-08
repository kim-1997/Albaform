"use client";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { loginApi } from "@/lib/api/login";
import { LoginPayload, LoginResponse } from "@/lib/types/login";
import { useUserStore } from "@/stores/userStore";

export const useLogin = (): UseMutationResult<
    LoginResponse,
    Error,
    LoginPayload
> => {
    const setUser = useUserStore((state) => state.setUser);
    const router = useRouter();

    return useMutation<LoginResponse, Error, LoginPayload>({
        mutationFn: (data: LoginPayload) => loginApi(data),
        onSuccess: (data: LoginResponse) => {
            setUser(data.user, data.accessToken, data.refreshToken);
            alert("로그인 성공!");
            router.push("/");
        },
        onError: (error: unknown) => {
            if (error instanceof Error) {
                alert("로그인 실패: " + error.message);
            } else {
                alert("로그인 실패: 알 수 없는 오류");
            }
        },
    });
};
