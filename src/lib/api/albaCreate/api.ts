import axios from "axios";
import { CreateAlbaRequest, CreateAlbaResponse } from "./type";

const BASE_URL = "https://fe-project-albaform.vercel.app/9908";

export const createAlbaPost = async (
    payload: CreateAlbaRequest
): Promise<CreateAlbaResponse> => {
    const token = localStorage.getItem("accessToken");
    const res = await axios.post<CreateAlbaResponse>(
        `${BASE_URL}/forms`,
        payload,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );
    return res.data;
};
