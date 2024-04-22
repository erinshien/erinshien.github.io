import Image from "next/image";
import styles from "./page.module.css";

import Title from "./Title/Title";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "./Contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
