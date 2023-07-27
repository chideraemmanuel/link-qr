import Generator from "./containers/generator/Generator";
import Hero from "./containers/hero/Hero";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Generator />
    </main>
  );
}
