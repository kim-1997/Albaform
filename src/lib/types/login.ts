export type UserRole = "OWNER" | "APPLICANT";

export type User = {
    id: number;
    name: string;
    email: string;
    nickname: string;
    role: UserRole;
    storeName?: string; // 사장님 전용 정보
};

export type LoginResponse = {
    accessToken: string;
    refreshToken: string;
    user: User;
};

export type LoginPayload = {
    email: string;
    password: string;
};
