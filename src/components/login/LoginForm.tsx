"use client";
import Link from "next/link";
import Button from "../button/Button";
import styles from "./LoginForm.module.css";
import { useState } from "react";
import Input from "../input/Input";
import { SignIn, SigninFormProps } from "@/lib/types/signin";

export default function LoginForm({ onSubmit, role }: SigninFormProps) {
    const [form, setForm] = useState<SignIn>({ email: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };
    return (
        <div className={styles.wrap}>
            <div className={styles.login}>
                <h2 className={styles.title}>{role === "APPLICANT" ? "지원자 로그인" : "사장님 로그인"}</h2>
                <div className={styles.info}>
                    <p className={styles.signup}>
                        {role === "APPLICANT" ? (
                            <>
                                아직 계정이 없으신가요?
                                <Link href="/signup/applicant" className={styles.signupLink}>
                                    회원가입 하기
                                </Link>
                            </>
                        ) : (
                            <>
                                사장님 계정이 없으신가요?
                                <Link href="/signup/owner" className={styles.signupLink}>
                                    회원가입 하기
                                </Link>
                            </>
                        )}
                    </p>

                    <p className={styles.roleNotice}>
                        {role === "APPLICANT"
                            ? "사장님 로그인은 사장님 전용 페이지에서 할 수 있습니다."
                            : "지원자 로그인은 지원자 전용 페이지에서 할 수 있습니다."}
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

                {role === "APPLICANT" ? (
                    <Button text="지원자 로그인" type="submit" />
                ) : (
                    <Button text="사장님 로그인" type="submit" />
                )}
            </form>
        </div>
    );
}
