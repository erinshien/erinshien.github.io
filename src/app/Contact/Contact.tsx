import 'react';
import './Contact.module.css';

import Image from 'next/image'
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <h1>INSERT FORM HERE</h1>
      <div>
        <h3>LET'S CONNECT</h3>
        <Image
          src=""
          width={50}
          height={50}
          alt="LinkedIn icon"
        />
        <Image
          src=""
          width={50}
          height={50}
          alt="GitHub icon"
        />
        <Image
          src=""
          width={500}
          height={500}
          alt="Illustration of Erin"
        />
      </div>
      <Link href="/#home">TAKE ME TO THE TOP!</Link>
    </>
  )
}