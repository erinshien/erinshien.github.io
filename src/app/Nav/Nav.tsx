import 'react';
import styles from './Nav.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <header className={styles.header} id="home">
      <Link href="/#home">Home</Link>
      <Link href="/#projects">Projects</Link>
      <Link href="/#about">About</Link>
      <Link href="/#contact">Contact</Link>
    </header>
  );
}