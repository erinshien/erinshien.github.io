import 'react';
import styles from './TechIcon.module.css';

import Image from 'next/image';

interface TechIconProps {
  src: string;
  alt: string;
  caption: string;
};

export default function TechIcon({ src, alt, caption }: TechIconProps) {
  return(
    <div className={styles.container}>
      <Image 
        src={src}
        alt={alt}
        width={30}
        height={30}
      />
      <p className={styles.caption}>{caption}</p>
    </div>
  )
}