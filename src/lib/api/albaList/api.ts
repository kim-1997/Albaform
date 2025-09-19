import axios from "axios";
import { GetAlbaResponse, GetAlbaParams } from "./type";

const BASE_URL = "https://fe-project-albaform.vercel.app/9908";

export const getAlbaList = async (params: GetAlbaParams) => {
    const { limit, cursor, orderBy, keyword, isRecruiting } = params;
    const res = await axios.get<GetAlbaResponse>(`${BASE_URL}/forms`, {
        params: {
            limit,
            cursor,
            orderBy,
            keyword,
            isRecruiting,
        },
    });
    return res.data;
};
