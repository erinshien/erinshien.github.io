import 'react';
import styles from './Title.module.css';
import Image from 'next/image'

export default function Title() {
  return (
    <section className={styles.title}>
      <h1 className={styles.firstNames}>ERIN SHIEN<Image className={styles.image}
        priority
        src="/image1.png"
        width={350}
        height={300}
        alt="Picture of the author"
      /></h1>
      <h1 className={styles.surname}>SMITH</h1>
      <p className={styles.p}>Full Stack Developer & Designer</p>
    </section>
  )
}