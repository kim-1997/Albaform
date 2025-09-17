"use client";
import Link from "next/link";
import Button from "../button/Button";
import styles from "./SignupForm.module.css";
import { useState } from "react";
import Input from "../input/Input";
import { SignUp, SignupFormProps } from "@/lib/types/signup";

export default function SignupForm({ onSubmit, role }: SignupFormProps) {
    const [step, setStep] = useState<"account" | "details">("account");
    const [form, setForm] = useState<SignUp & { passwordConfirm: string }>({
        email: "",
        password: "",
        passwordConfirm: "",
        name: "",
        nickname: "",
        role,
        storeName: "",
        storePhoneNumber: "",
        phoneNumber: "",
        location: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        if (!form.email || !form.password) return alert("이메일/비밀번호를 입력하세요");
        setStep("details");
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
            <div className={styles.signupform}>
                <h2 className={styles.title}>
                    {role === "APPLICANT" && step === "account" && "지원자 회원가입"}
                    {role === "APPLICANT" && step === "details" && "지원자 추가정보"}
                    {role === "OWNER" && step === "account" && "사장님 회원가입"}
                    {role === "OWNER" && step === "details" && "사장님 추가정보"}
                </h2>
                <div className={styles.info}>
                    {role === "APPLICANT" && step === "account" && (
                        <p className={styles.signup}>
                            이미 계정이 있으신가요?
                            <Link href="/signin/applicant" className={styles.signupLink}>
                                로그인 하기
                            </Link>
                        </p>
                    )}
                    {role === "OWNER" && step === "account" && (
                        <p className={styles.signup}>
                            이미 사장님 계정이 있으신가요?
                            <Link href="/signin/owner" className={styles.signupLink}>
                                로그인 하기
                            </Link>
                        </p>
                    )}
                    {(role === "OWNER" || role === "APPLICANT") && step === "details" && (
                        <p className={styles.signup}>추가 정보를 입력하여 회원가입을 완료해주세요.</p>
                    )}

                    <p className={styles.roleNotice}>
                        {role === "APPLICANT" &&
                            step === "account" &&
                            "사장님 회원가입은 사장님 전용 페이지에서 할 수 있습니다."}
                        {role === "OWNER" &&
                            step === "account" &&
                            "지원자 회원가입은 지원자 전용 페이지에서 할 수 있습니다."}
                    </p>
                </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                {step === "account" && (
                    <div className={styles.step01}>
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
                            type="password"
                            name="passwordConfirm"
                            value={form.passwordConfirm}
                            onChange={handleChange}
                        />

                        <Button text="다음" type="button" onClick={handleNext} />
                    </div>
                )}

                {step === "details" && role === "APPLICANT" && (
                    <div className={styles.step02}>
                        <Input
                            labelText="이름"
                            id="name"
                            placeholder="이름을 입력해주세요"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                        <Input
                            labelText="연락처"
                            id="phoneNumber"
                            placeholder="숫자만 입력해주세요"
                            type="text"
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={handleChange}
                        />
                        <Input
                            labelText="닉네임"
                            id="nickname"
                            placeholder="닉네임을 입력해주세요"
                            type="text"
                            name="nickname"
                            value={form.nickname}
                            onChange={handleChange}
                        />
                        <Button text="시작하기" type="submit" />
                    </div>
                )}
                {step === "details" && role === "OWNER" && (
                    <div className={styles.step02}>
                        <Input
                            labelText="닉네임"
                            id="nickname"
                            placeholder="닉네임을 입력해주세요"
                            type="text"
                            name="nickname"
                            value={form.nickname}
                            onChange={handleChange}
                        />
                        <Input
                            labelText="가게 이름"
                            id="storeName"
                            placeholder="가게 이름(상호명)을 입력해주세요"
                            type="text"
                            name="storeName"
                            value={form.storeName}
                            onChange={handleChange}
                        />
                        <Input
                            labelText="가게 전화번호"
                            id="storePhoneNumber"
                            placeholder="숫자만 입력해주세요"
                            type="text"
                            name="storePhoneNumber"
                            value={form.storePhoneNumber}
                            onChange={handleChange}
                        />
                        <Input
                            labelText="사장님 전화번호"
                            id="ownerPhoneNumber"
                            placeholder="숫자만 입력해주세요"
                            type="text"
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={handleChange}
                        />
                        <Input
                            labelText="가게 위치"
                            id="location"
                            placeholder="가게 위치를 설정해 주세요"
                            type="text"
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                        />
                        <Button text="시작하기" type="submit" />
                    </div>
                )}
            </form>
        </div>
    );
}
