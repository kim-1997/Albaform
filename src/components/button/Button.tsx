import styles from "./Button.module.css";

type ButtonType = {
    text?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    isPending?: boolean;
    onClick?: () => void;
};

export default function Button({
    text = "로그인",
    type = "submit",
    disabled = false,
    isPending = false,
    onClick,
}: ButtonType) {
    return (
        <button type={type} className={styles.btn} disabled={disabled || isPending} onClick={onClick}>
            <span className={styles.btnText}>{isPending ? "로그인 중..." : text}</span>
        </button>
    );
}
