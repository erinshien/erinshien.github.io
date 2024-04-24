import 'react';
import styles from './ProjectCard.module.css';

import Image from 'next/image';
import Link from 'next/link';

interface Icon {
  imageUrl: string;
  alt: string;
};

interface ProjectCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  icons: Icon[];
  liveSite: string;
  githubLink: string;
  projectPageLink: string;
};

export default function ProjectCard({ image, alt, title, description, icons, liveSite, githubLink, projectPageLink }: ProjectCardProps) {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        width={1080}
        height={680}
        alt={alt}
      />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <h5>MADE WITH</h5>
        {icons.map(({ imageUrl, alt }, index) => (
          <Image 
          key={index}
          src={imageUrl} 
          width={50}
          height={50}
          alt={alt}
          />
        ))}
        <h5><a href={liveSite}>LIVE SITE</a> | <a href={githubLink}>GITHUB</a></h5>
        <Link href={projectPageLink}>
          <button>FIND OUT MORE</button>
        </Link>
      </div>
    </div>
  )
};
