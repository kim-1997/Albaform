"use client";
import Link from "next/link";
import { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import styles from "./LoginForm.module.css";
import { useRoleStore } from "@/stores/roleStore";
import { useLogin } from "@/hooks/useLogin";
import { LoginPayload } from "@/lib/types/login";

export default function LoginForm() {
    const { role } = useRoleStore();
    const [form, setForm] = useState<LoginPayload>({ email: "", password: "" });
    const { mutate, isPending, isError, error } = useLogin();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(form);
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.login}>
                <h2 className={styles.title}>로그인</h2>
                <div className={styles.info}>
                    <p className={styles.signup}>
                        로그인 아직 계정이 없으신가요?
                        <Link href="/" className={styles.signupLink}>
                            회원가입 하기
                        </Link>
                    </p>

                    <p className={styles.roleNotice}>
                        {role === "applicant"
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

                <Button
                    text={
                        role === "applicant" ? "지원자 로그인" : "사장님 로그인"
                    }
                    type="submit"
                    isPending={isPending}
                />

                {isError && (
                    <p style={{ color: "red", marginTop: "10px" }}>
                        로그인 실패: {error?.message}
                    </p>
                )}
            </form>
        </div>
    );
}
