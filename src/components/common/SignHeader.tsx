"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.css";
import { useRoleStore } from "@/stores/roleStore";
import { useUserStore } from "@/stores/useUserStore";
import Image from "next/image";

export default function Header() {
    const { role, setRole } = useRoleStore();
    const router = useRouter();
    const pathname = usePathname();
    const { user, logout } = useUserStore();

    const handleClick = (newRole: "APPLICANT" | "OWNER") => {
        setRole(newRole);

        if (pathname.startsWith("/signup")) {
            router.push(newRole === "APPLICANT" ? "/signup/applicant" : "/signup/owner");
        } else if (pathname.startsWith("/signin")) {
            router.push(newRole === "APPLICANT" ? "/signin/applicant" : "/signin/owner");
        }
    };
    return (
        <div className={styles.header}>
            <div className={styles.inner}>
                <Image src={"/images/logo.png"} width={284} height={40} alt="로고" />
                <div className={styles.buttonBox}>
                    <button
                        onClick={() => handleClick("APPLICANT")}
                        className={role === "APPLICANT" ? `${styles.active}` : ""}
                    >
                        지원자 전용
                    </button>
                    <button onClick={() => handleClick("OWNER")} className={role === "OWNER" ? `${styles.active}` : ""}>
                        사장님 전용
                    </button>
                </div>

                {/* {user ? (
                <div>
                    <span>
                        {user.email} ({user.role})
                    </span>
                    <button onClick={logout}>로그아웃</button>
                </div>
            ) : (
                <a href="/signin/applicant">로그인</a>
            )} */}
            </div>
        </div>
    );
}
