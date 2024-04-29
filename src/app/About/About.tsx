import 'react';
import styles from './About.module.css';

import Image from 'next/image'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { LiaArrowsAltHSolid } from "react-icons/lia";
import { IoAccessibilityOutline } from "react-icons/io5";
import { DiResponsive } from "react-icons/di";

export default function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.aboutH2}>ABOUT ME</h2>
      <div className={styles.about}>
        <Image
          src="/image2.png"
          width={350}
          height={350}
          alt="Illustration of Erin at a desk"
        />
        <div className={styles.bio}>
          <p className={styles.bioText}>Originally from Sydney, Australia I moved to the UK to work as a film & tv art director, designing sets that people would watch on the big screen. I have transitioned into a tech career in order to make a difference through my work, designing user experiences to solve problems and impact lives for the better.</p>
          <button className={styles.button}>DOWNLOAD CV</button>
        </div>
      </div>
      <div className={styles.toolkit}>
        <h2 className={styles.toolkitH2}>MY TOOLKIT</h2>
        <ul className={styles.techStack}>
          <li className={styles.techItem}>
            <FaHtml5 className={styles.techIcon}/>
            <p className={styles.techLabel}>HTML</p>
          </li>
          <li className={styles.techItem}>
            <FaCss3Alt className={styles.techIcon}/>
            <p className={styles.techLabel}>CSS</p>
          </li>
          <li className={styles.techItem}>
            <SiJavascript className={styles.techIcon}/>
            <p className={styles.techLabel}>JavaScript</p>
          </li>
          <li className={styles.techItem}>
            <SiTypescript className={styles.techIcon}/>
            <p className={styles.techLabel}>TypeScript</p>
          </li>
          <li className={styles.techItem}>
            <FaReact className={styles.techIcon}/>
            <p className={styles.techLabel}>React</p>
          </li>
          <li className={styles.techItem}>
            <SiNextdotjs className={styles.techIcon}/>
            <p className={styles.techLabel}>Next.js</p>
          </li>
          <li className={styles.techItem}>
            <FaNodeJs className={styles.techIcon}/>
            <p className={styles.techLabel}>Node.js</p>
          </li>
          <li className={styles.techItem}>
            <FaGitAlt className={styles.techIcon}/>
            <p className={styles.techLabel}>Git</p>
          </li>
          <li className={styles.techItem}>
            <LiaArrowsAltHSolid className={styles.techIcon}/>
            <p className={styles.techLabel}>REST API</p>
          </li>
          <li className={styles.techItem}>
            <SiPostman className={styles.techIcon}/>
            <p className={styles.techLabel}>Postman</p>
          </li>
          <li className={styles.techItem}>
            <FaFigma className={styles.techIcon}/>
            <p className={styles.techLabel}>Figma</p>
          </li>
          <li className={styles.techItem}>
            <SiAdobephotoshop className={styles.techIcon}/>
            <p className={styles.techLabel}>Adobe Photoshop</p>
          </li>
          <li className={styles.techItem}>
            <SiAdobeillustrator className={styles.techIcon}/>
            <p className={styles.techLabel}>Adobe Illustrator</p>
          </li>
          <li className={styles.techItem}>
            <IoAccessibilityOutline className={styles.techIcon}/>
            <p className={styles.techLabel}>Accessibility</p>
          </li>
          <li className={styles.techItem}>
            <DiResponsive className={styles.techIcon}/>
            <p className={styles.techLabel}>Responsive Design</p>
          </li>
        </ul>
      </div>
    </section>
  )
}