import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "https://fe-project-albaform.vercel.app/9908";

const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    const token = localStorage.getItem("accessToken");

    const response = await axios.post(`${BASE_URL}/images/upload`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data as { url: string };
};

export const useUploadImage = () => {
    return useMutation({
        mutationFn: uploadImage,
    });
};
