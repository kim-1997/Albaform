"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { Alba } from "@/lib/api/albaList/type";
import { getAlbaList } from "@/lib/api/albaList/api";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";
import Input from "@/components/input/Input";
import { useUserStore } from "@/stores/useUserStore";
import Image from "next/image";

export default function Page() {
    const router = useRouter();
    const [albaData, setAlbaData] = useState<Alba[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const { user } = useUserStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getAlbaList({ limit: 8, cursor: 0 });
                setAlbaData(res.data);
            } catch (err) {
                console.error("알바 리스트 불러오기 실패:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) return <p>불러오는 중...</p>;

    return (
        <div className={styles.wrap}>
            <div className={styles.searchBox}>
                <Input
                    hasLabel={false}
                    id="search"
                    placeholder="어떤 알바를 찾고 계세요?"
                    type="email"
                    name="search"
                    value={search}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.content}>
                <ul className={styles.formList}>
                    {albaData.map((it) => (
                        <li className={styles.formItem} key={it.id}>
                            <div className={styles.imagwrap}>
                                <Image
                                    src={"/images/default_img.jpg"}
                                    width={477}
                                    height={304}
                                    alt="알바 이미지"
                                />
                            </div>
                            <div className={styles.albaInfo}>
                                <div className={styles.top}>
                                    <span
                                        className={`${styles.tags} ${styles.active}`}
                                    >
                                        {it.isPublic ? "공개" : "비공개"}
                                    </span>
                                    <span
                                        className={`${styles.tags} ${styles.active}`}
                                    >
                                        모집 중
                                    </span>
                                    <span className={styles.date}>
                                        2024. 05. 22 ~ 2024. 05. 31
                                    </span>
                                    <Image
                                        src={"/images/ellipsis.png"}
                                        width={36}
                                        height={36}
                                        alt="ellipsis"
                                        className={styles.ellipsis}
                                    />
                                </div>
                                <p className={styles.text}>{it.title}</p>
                                <div className={styles.bottom}>
                                    <span>지원자 5명</span>
                                    <span>스크랩 8명</span>
                                    <span>마감 D-10</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {user?.role === "OWNER" && (
                <Button
                    text="폼 만들기"
                    width="140px"
                    height="64px"
                    borderRadius="32px"
                    onClick={() => router.push("/addform")}
                />
            )}
        </div>
    );
}
