import 'react';
import './About.module.css';

import Image from 'next/image'

export default function About() {
  return (
    <>
      <div>
        <h2>ABOUT ME</h2>
        <Image
          src=""
          width={500}
          height={500}
          alt="Illustration of Erin at a desk"
        />
        <p>Originally from Sydney, Australia I moved to the UK to work as a film & tv art director, designing sets that people would watch on the big screen. I have transitioned into a tech career in order to make a difference through my work, designing user experiences to solve problems and impact lives for the better.</p>
        <button>DOWNLOAD CV</button>
      </div>
      <div>
        <h2>MY TOOLKIT</h2>
      </div>
    </>
  )
}