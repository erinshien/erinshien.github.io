import 'react';
import styles from './Projects.module.css';

import ProjectCard from '../ProjectCard/ProjectCard';

const icons = [
  {
    imageUrl: "/HTML5.png",
    alt: "HTML icon",
  },
  {
    imageUrl: "/CSS3.png",
    alt: "CSS icon",
  },
  {
    imageUrl: "/Javascript.png",
    alt: "JavaScript icon",
  },
  {
    imageUrl: "/TypeScript.png",
    alt: "TypeScript icon",
  },
  {
    imageUrl: "/React.png",
    alt: "React icon",
  },
  {
    imageUrl: "/Nextjs.png",
    alt: "Next.js icon",
  },
  {
    imageUrl: "/Figma.png",
    alt: "Figma icon",
  },
  {
    imageUrl: "/Nodejs.png",
    alt: "Node.js icon",
  },
  {
    imageUrl: "/Shape.png",
    alt: "Git icon",
  },
  {
    imageUrl: "/Postman.png",
    alt: "Postman icon",
  }
];

const icons1 =[ icons[0], icons[1], icons[3], icons[4], icons[5]]

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.h2}>MY PROJECTS</h2>
      <div className={styles.projectCards}>
        <ProjectCard 
        image="/placeholder.png" 
        alt="placeholder" 
        title="FINAL PROJECT" 
        description="App of some sort to solve a problem as described by stakeholders. More info about the project like the problem itself and the features of the app. More words and stuff." 
        icons={icons1} 
        liveSite="" 
        githubLink="" 
        projectPageLink="" 
        />
        {/* <ProjectCard image="../../../images/placeholder.png" alt="placeholder"/>
        <ProjectCard image="../../../images/placeholder.png" alt="placeholder"/>
        <ProjectCard image="../../../images/placeholder.png" alt="placeholder"/> */}
      </div>
    </section>
  )
}