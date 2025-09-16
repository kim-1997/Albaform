import axios from "axios";
import { SignIn } from "../types/signin";

const BASE_URL = "https://fe-project-albaform.vercel.app/9908";

export const signinUser = async (payload: SignIn) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/sign-in`, payload);
        return response.data;
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.response?.data?.message || "로그인 실패");
        } else {
            throw new Error("로그인 실패");
        }
    }
};
