import styles from "./Banner.module.css"

export const Banner = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://github.com/hamsurang/react-ko-form"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        ⛰️ 같이 발전시켜 나가요! React Hook Form 번역하러 가기 ⛰️
      </a>
    </div>
  )
}
