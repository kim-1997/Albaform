import styles from "./Button.module.scss";

type ButtonType = {
    text?: string;
    type?: "button" | "submit";
    disabled?: boolean;
    className?: string;
    onClick?: () => void;

    // 스타일 관련 props
    bgColor?: string;
    color?: string;
    borderColor?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
};

export default function Button({
    text = "로그인",
    type = "submit",
    disabled = false,
    className,
    onClick,
    bgColor = "var(--orange-300)",
    color = "var(--gray-50)",
    borderColor = "transparent",
    borderRadius = "8px",
    width = "100%",
    height = "72px",
}: ButtonType) {
    return (
        <button
            type={type}
            className={`${styles.btn} ${className ?? ""}`}
            disabled={disabled}
            onClick={onClick}
            style={{
                backgroundColor: bgColor,
                color: color,
                borderRadius: borderRadius,
                borderColor: borderColor,
                width: width,
                height: height,
            }}
        >
            <span className={styles.btnText}>{text}</span>
        </button>
    );
}
