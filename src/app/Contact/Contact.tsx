import 'react';
import styles from './Contact.module.css';

import Link from 'next/link';

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiMedium } from "react-icons/si";


export default function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.main}>
        <div className={styles.contactForm}>
          <h3 className={styles.h3}>GET IN TOUCH</h3>
          <form>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <input 
                  type="text"
                  id="name"
                  name="name"
                />
              </li>
              <li>
                <input 
                  type="email"
                  id="email"
                  name="email"
                />
              </li>
              <li>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  cols={30}
                  className={styles.textarea}
                ></textarea>
              </li>
            </ul>
            <button type="submit" className={styles.button}>
              SEND
            </button>
          </form>
        </div>
        <div className={styles.socials}>
          <h3 className={styles.h3}>LET`&apos;`S CONNECT</h3>
          <FaLinkedin />
          <FaGithub />
          <SiMedium />
        </div>
      </div>
      <Link href="/#home" className={styles.homeLink}>TAKE ME TO THE TOP!</Link>
    </section>
  )
}