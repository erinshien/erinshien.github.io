import 'react';
import './Nav.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <header>
      <Link href="/#home">Home</Link>
      <Link href="/#projects">Projects</Link>
      <Link href="/#about">About</Link>
      <Link href="/#contact">Contact</Link>
    </header>
  );
}