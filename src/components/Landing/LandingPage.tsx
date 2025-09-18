"use client";

import Image from "next/image";
import styles from "./LandingPage.module.scss";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "next/navigation";
import Button from "../button/Button";

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
                    <Image
                        src={"/images/keyvisual_logo.png"}
                        width={248}
                        height={48}
                        alt="키비쥬얼 로고"
                    />
                    <h2>한 곳에서 관리하는 알바 구인 플랫폼</h2>
                    <Button
                        className={styles.startBtn}
                        text="알바폼 시작하기"
                        onClick={handleClick}
                        borderRadius="100px"
                        bgColor="var(--blue-300)"
                        height="80px"
                        width="auto"
                    />
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
                                alt="seciton01"
                                className={styles.sectionImg}
                            />
                        </div>
                    </section>
                    <section className={styles.seciton}>
                        <div className={styles.imagewrap}>
                            <Image
                                src={"/images/section02.jpg"}
                                width={1140}
                                height={640}
                                alt="seciton02"
                                className={styles.sectionImg}
                            />
                        </div>
                    </section>
                    <section className={styles.seciton}>
                        <div className={styles.imagewrap}>
                            <Image
                                src={"/images/section03.jpg"}
                                width={1140}
                                height={640}
                                alt="seciton03"
                                className={styles.sectionImg}
                            />
                        </div>
                    </section>
                    <section className={styles.seciton}>
                        <div className={styles.imagewrap}>
                            <Image
                                src={"/images/section04.jpg"}
                                width={1140}
                                height={640}
                                alt="seciton04"
                                className={styles.sectionImg}
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
                    <Button
                        className={styles.startBtn}
                        text="알바폼 시작하기"
                        onClick={handleClick}
                        borderRadius="100px"
                        bgColor="var(--blue-300)"
                        height="80px"
                        width="auto"
                    />
                </div>
            </div>
        </div>
    );
}
