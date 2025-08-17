import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../Assets/Images/Carousel/picturedRocksBright.jpeg';
import img2 from '../Assets/Images/Carousel/picturedRocksBright.jpeg';
import img3 from '../Assets/Images/Carousel/picturedRocksBright.jpeg';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src={img1} alt="Working on a project" />
        </div>
        <div>
          <img src={img2} alt="Exploring nature" />
        </div>
        <div>
          <img src={img3} alt="Creative workspace" />
        </div>
      </Carousel>

      <p>
        I’m a designer, developer, and lifelong learner. My journey blends logic with creativity—
        from designing fluid UIs to brainstorming wild side projects. This space is my digital autobiography.
      </p>
    </section>
  );
}

export default About;
