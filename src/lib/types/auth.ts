export type User = {
    location: string;
    phoneNumber: string;
    storePhoneNumber: string;
    storeName: string;
    role: "APPLICANT" | "OWNER";
    imageUrl: string;
    nickname: string;
    name: string;
    email: string;
    id: number;
};
