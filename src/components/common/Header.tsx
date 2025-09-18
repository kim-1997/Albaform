"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.scss";
import { useRoleStore } from "@/stores/roleStore";
import { useUserStore } from "@/stores/useUserStore";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const { role, setRole } = useRoleStore();
    const router = useRouter();
    const pathname = usePathname();
    const { user, logout } = useUserStore();

    const menus = [
        { href: "/albalist", label: "알바 목록" },
        { href: "/albatalk", label: "알바토크" },
        { href: "/myalbaform", label: "내 알바폼" },
    ];

    const handleClick = (newRole: "APPLICANT" | "OWNER") => {
        setRole(newRole);

        if (pathname.startsWith("/signup")) {
            router.push(
                newRole === "APPLICANT" ? "/signup/applicant" : "/signup/owner"
            );
        } else if (pathname.startsWith("/signin")) {
            router.push(
                newRole === "APPLICANT" ? "/signin/applicant" : "/signin/owner"
            );
        }
    };
    return (
        <div className={styles.header}>
            <div className={styles.inner}>
                <Link href={"/"}>
                    <Image
                        src={"/images/logo.png"}
                        width={284}
                        height={40}
                        alt="로고"
                    />
                </Link>
                {pathname.startsWith("/signup") ||
                pathname.startsWith("/signin") ? (
                    <div className={styles.buttonBox}>
                        <button
                            onClick={() => handleClick("APPLICANT")}
                            className={
                                role === "APPLICANT" ? `${styles.active}` : ""
                            }
                        >
                            지원자 전용
                        </button>
                        <button
                            onClick={() => handleClick("OWNER")}
                            className={
                                role === "OWNER" ? `${styles.active}` : ""
                            }
                        >
                            사장님 전용
                        </button>
                    </div>
                ) : (
                    <>
                        <nav className={styles.nav}>
                            {menus.map((menu) => (
                                <Link
                                    key={menu.href}
                                    href={menu.href}
                                    className={
                                        pathname.startsWith(menu.href)
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    {menu.label}
                                </Link>
                            ))}
                        </nav>
                        {user ? (
                            <div className={styles.userInfo}>
                                <div>
                                    {role === "APPLICANT"
                                        ? `${user.nickname} 지원자님`
                                        : `${user.nickname} 사장님`}
                                </div>
                                <div onClick={logout} className={styles.logout}>
                                    로그아웃
                                </div>
                            </div>
                        ) : (
                            <div className={styles.userInfo}>
                                <a href="/signin/applicant">로그인</a>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
