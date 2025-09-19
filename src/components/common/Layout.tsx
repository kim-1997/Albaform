"use client";

import { usePathname } from "next/navigation";
import styles from "./Layout.module.scss";
import MainLayout from "./MainLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    if (pathname === "/") {
        return <MainLayout>{children}</MainLayout>;
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.inner}>{children}</div>
        </div>
    );
}
