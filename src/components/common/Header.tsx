"use client";
import { useRoleStore } from "@/stores/roleStore";
import styles from "./Header.module.css";

export default function Header() {
    const { role, setRole } = useRoleStore();

    return (
        <div className={styles.header}>
            <button
                onClick={() => setRole("owner")}
                disabled={role === "owner"}
            >
                사장님
            </button>

            <button
                onClick={() => setRole("applicant")}
                disabled={role === "applicant"}
            >
                지원자
            </button>
        </div>
    );
}
