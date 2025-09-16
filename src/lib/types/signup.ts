export type SignUp = {
    email: string;
    password: string;
    name: string;
    nickname: string;
    role: "OWNER" | "APPLICANT";
    storeName?: string;
    storePhoneNumber?: string;
    phoneNumber?: string;
    location?: string;
};
export type SignupFormProps = {
    onSubmit: (form: SignUp, role: "OWNER" | "APPLICANT") => void;
    role: "OWNER" | "APPLICANT";
};
