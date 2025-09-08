import axios from "axios";
import { LoginPayload, LoginResponse } from "@/lib/types/login";

const BASE_URL = "https://fe-project-albaform.vercel.app/9908";

export const loginApi = async (data: LoginPayload): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(
        `${BASE_URL}/auth/sign-in`,
        data
    );
    return response.data;
};
