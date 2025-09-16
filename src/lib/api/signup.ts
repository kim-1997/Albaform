import axios from "axios";
import { SignUp } from "../types/signup";

const BASE_URL = "https://fe-project-albaform.vercel.app/9908";

export const signupUser = async (payload: SignUp) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/sign-up`, payload);
        return response.data;
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.response?.data?.message || "회원가입 실패");
        } else {
            throw new Error("회원가입 실패");
        }
    }
};
