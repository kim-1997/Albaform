export type SignUp = {
    email: string;
    password: string;
    name: string;
    nickname: string;
    role: "OWNER" | "APPLICANT";
    storeName?: string | undefined;
    storePhoneNumber?: string | undefined;
    phoneNumber?: string | undefined;
    location?: string | undefined;
};
export type SignupFormProps = {
    onSubmit: (form: SignUp, role: "OWNER" | "APPLICANT") => void;
    role: "OWNER" | "APPLICANT";
};
