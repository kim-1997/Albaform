"use client";
import { createAlbaPost } from "@/lib/api/albaCreate/api";
import { CreateAlbaRequest } from "@/lib/api/albaCreate/type";
import { useRouter } from "next/navigation";
import { useState } from "react";

const tempJobPost = {
    isPublic: false, // 게시글 공개 여부
    hourlyWage: 12000, // 시급
    isNegotiableWorkDays: true, // 근무 요일 협의 가능 여부
    workDays: ["월", "화", "수"], // 근무 요일
    workStartTime: "09:00", // 근무 시작 시간
    workEndTime: "18:00", // 근무 종료 시간
    workStartDate: "2025-09-25T09:00:00Z", // 근무 시작 날짜
    workEndDate: "2025-10-25T18:00:00Z", // 근무 종료 날짜
    location: "서울 강남구", // 근무 장소
    preferred: "경력 1년 이상", // 우대 사항
    age: "20-30", // 희망 나이
    education: "대졸 이상", // 학력 요구사항
    gender: "무관", // 성별 요구사항
    numberOfPositions: 2, // 모집 인원
    imageUrls: ["https://via.placeholder.com/150"], // 이미지 URL 배열
    recruitmentStartDate: "2025-09-19T00:00:00Z", // 모집 시작일
    recruitmentEndDate: "2025-09-30T23:59:59Z", // 모집 마감일
    description: "알바 모집 테스트용 게시글입니다.", // 상세 설명
    title: "프론트엔드 개발자 모집합니다. Next.js 우대", // 게시글 제목
};

export default function JobPostForm() {
    const router = useRouter();
    const [form, setForm] = useState<CreateAlbaRequest>({
        isPublic: true, // 게시글 공개 여부
        hourlyWage: 0, // 시급 (숫자)
        isNegotiableWorkDays: true, // 근무 요일 협의 가능 여부
        workDays: [], // 근무 요일 배열 (예: ["월", "화", "수"])
        workStartTime: "", // 근무 시작 시간
        workEndTime: "", // 근무 종료 시간
        workStartDate: "", // 근무 시작 날짜 (ISO 문자열, "2025-09-19T00:00:00Z")
        workEndDate: "", // 근무 종료 날짜 (ISO 문자열)
        location: "", // 근무 장소
        preferred: "", // 우대 사항 (예: 경력, 특정 기술 등)
        age: "", // 희망 나이 (예: "20-30")
        education: "", // 학력 요구사항 (예: "고졸 이상")
        gender: "", // 성별 요구사항 (예: "남", "여", "무관")
        numberOfPositions: 0, // 모집 인원 수
        imageUrls: [], // 이미지 URL 배열 (업로드된 사진 등)
        recruitmentStartDate: "", // 모집 시작일 (ISO 문자열)
        recruitmentEndDate: "", // 모집 마감일 (ISO 문자열)
        description: "", // 상세 설명
        title: "", // 게시글 제목
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;

        setForm((prev) => {
            if (type === "checkbox" && e.target instanceof HTMLInputElement) {
                return {
                    ...prev,
                    [name]: e.target.checked,
                };
            }

            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createAlbaPost(tempJobPost);
            alert("알바 생성 완료");
            router.push("/albalist");
        } catch (err) {
            console.error(err);
            alert("error");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Title"
            />
            <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <button type="submit">Create Job Post</button>
        </form>
    );
}
