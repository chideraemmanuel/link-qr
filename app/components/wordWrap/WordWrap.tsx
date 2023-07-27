import styles from "./WordWrap.module.scss";

const WordWrap = ({ children }: { children: string }) => {
  return (
    <div className={styles.wordWrap}>
      <div className={styles.wordWrap__topRightBox}></div>
      <div className={styles.wordWrap__topLeftBox}></div>
      <div className={styles.wordWrap__bottomRightBox}></div>
      <div className={styles.wordWrap__bottomBox}></div>
      <span className={styles.wordWrap__word}>{children}</span>
    </div>
  );
};

export default WordWrap;
