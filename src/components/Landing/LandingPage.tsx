"use client";

import Image from "next/image";
import styles from "./LandingPage.module.css";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "next/navigation";

export default function LandingPage() {
    const { user } = useUserStore();
    const router = useRouter();

    const handleClick = () => {
        if (!user) {
            alert("로그인이 필요합니다.");
            router.push("/signin/applicant");
        } else router.push("/");
    };
    return (
        <div className={styles.wrap}>
            <div className={styles.keyvisiual}>
                <div className={styles.keyvisiualInner}>
                    <Image src={"/images/keyvisual_logo.png"} width={248} height={48} alt="키비쥬얼 로고" />
                    <h2>한 곳에서 관리하는 알바 구인 플랫폼</h2>
                    <button onClick={handleClick} className={styles.startBtn}>
                        알바폼 시작하기
                    </button>
                </div>
            </div>
            <div className={styles.sections}>
                <div className={styles.sectionsInner}>
                    <section className={styles.seciton}>
                        <div className={styles.imagewrap}>
                            <Image
                                src={"/images/section01.jpg"}
                                width={1140}
                                height={"640"}
                                style={{ width: "100%", height: "auto" }}
                                alt="seciton01"
                            />
                        </div>
                    </section>
                    <section className={styles.seciton}>
                        <div className={styles.imagewrap}>
                            <Image
                                src={"/images/section02.jpg"}
                                width={1140}
                                height={640}
                                style={{ width: "100%", height: "auto" }}
                                alt="seciton02"
                            />
                        </div>
                    </section>
                    <section className={styles.seciton}>
                        <div className={styles.imagewrap}>
                            <Image
                                src={"/images/section03.jpg"}
                                width={1140}
                                height={640}
                                style={{ width: "100%", height: "auto" }}
                                alt="seciton03"
                            />
                        </div>
                    </section>
                    <section className={styles.seciton}>
                        <div className={styles.imagewrap}>
                            <Image
                                src={"/images/section04.jpg"}
                                width={1140}
                                height={640}
                                style={{ width: "100%", height: "auto" }}
                                alt="seciton04"
                            />
                        </div>
                    </section>
                </div>
                <div className={styles.bottom}>
                    <h3>
                        한 곳에서 관리하는
                        <br />
                        알바 구인 플랫폼
                    </h3>
                    <button onClick={handleClick} className={styles.startBtn}>
                        알바폼 시작하기
                    </button>
                </div>
            </div>
        </div>
    );
}
