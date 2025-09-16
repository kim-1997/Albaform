import Image from "next/image";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
    return (
        <div className={styles.wrap}>
            <div className={styles.keyvisiual}>
                <div className={styles.inner}>
                    <Image src={"/images/keyvisual_logo.png"} width={248} height={48} alt="키비쥬얼 로고" />
                    <h2>한 곳에서 관리하는 알바 구인 플랫폼</h2>
                    <button>알바폼 시작하기</button>
                </div>
            </div>
        </div>
    );
}
