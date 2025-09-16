export type SignIn = {
    email: string;
    password: string;
};
export type SigninFormProps = {
    onSubmit: (form: SignIn) => void;
    role: "APPLICANT" | "OWNER";
};
