import 'react';
import './Projects.module.css';

import ProjectCard from '../ProjectCard/ProjectCard';

export default function Projects() {
  return (
    <section id="projects">
      <h2>MY PROJECTS</h2>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  )
}