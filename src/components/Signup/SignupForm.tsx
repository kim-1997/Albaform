"use client";
import Link from "next/link";
import Button from "../button/Button";
import styles from "./SignupForm.module.css";
import { useState } from "react";
import Input from "../input/Input";
import { SignUp, SignupFormProps } from "@/lib/types/signup";

export default function LoginForm({ onSubmit, role }: SignupFormProps) {
    const [form, setForm] = useState<SignUp & { passwordConfirm: string }>({
        email: "",
        password: "",
        passwordConfirm: "",
        name: "sdasd",
        nickname: "xzvzxcv",
        role,
        storeName: "123123",
        storePhoneNumber: "123123",
        phoneNumber: "123123",
        location: "zxczxc",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.password !== form.passwordConfirm) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        const submitData = {
            email: form.email,
            password: form.password,
            name: form.name,
            nickname: form.nickname,
            role: form.role,
            storeName: form.storeName,
            storePhoneNumber: form.storePhoneNumber,
            phoneNumber: form.phoneNumber,
            location: form.location,
        };
        onSubmit(submitData, role);
    };
    return (
        <div className={styles.wrap}>
            <div className={styles.login}>
                <h2 className={styles.title}>{role === "APPLICANT" ? "지원자 회원가입" : "사장님 회원가입"}</h2>
                <div className={styles.info}>
                    {role === "APPLICANT" ? (
                        <p className={styles.signup}>
                            이미 계정이 있으신가요?
                            <Link href="/signin/applicant" className={styles.signupLink}>
                                로그인 하기
                            </Link>
                        </p>
                    ) : (
                        <p className={styles.signup}>
                            이미 사장님 계정이 있으신가요?
                            <Link href="/signin/owner" className={styles.signupLink}>
                                로그인 하기
                            </Link>
                        </p>
                    )}

                    <p className={styles.roleNotice}>
                        {role === "APPLICANT"
                            ? "사장님 회원가입은 사장님 전용 페이지에서 할 수 있습니다."
                            : "지원자 회원가입은 지원자 전용 페이지에서 할 수 있습니다."}
                    </p>
                </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <Input
                    labelText="이메일"
                    id="email"
                    placeholder="이메일을 입력해주세요"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                <Input
                    labelText="비밀번호"
                    id="password"
                    placeholder="비밀번호를 입력해주세요"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />
                <Input
                    labelText="비밀번호"
                    id="passwordConfirm"
                    placeholder="비밀번호를 한번 더 입력해주세요"
                    type="passwordConfirm"
                    name="passwordConfirm"
                    value={form.passwordConfirm}
                    onChange={handleChange}
                />

                <Button text="다음" type="submit" />
            </form>
        </div>
    );
}
