"use client";

import styles from "./MainLayout.module.scss";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.wrap}>
            <div className={styles.inner}>{children}</div>
        </div>
    );
}
