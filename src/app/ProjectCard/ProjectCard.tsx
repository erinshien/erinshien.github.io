import 'react';
import './ProjectCard.module.css';

import Image from 'next/image'

export default function ProjectCard() {
  return (
    <div>
      <Image
        src=""
        width={500}
        height={500}
        alt="Picture of final project"
      />
      <div>
        <h4>FINAL PROJECT</h4>
        <p>App of some sort to solve a problem as described by stakeholders. More info about the project like the problem itself and the features of the app. More words and stuff.</p>
      </div>
      <div>
        <h5>MADE WITH</h5>
        <h5><a href="">LIVE SITE</a> | <a href="">GITHUB</a></h5>
        <button>FIND OUT MORE</button>
      </div>
    </div>
  )
}