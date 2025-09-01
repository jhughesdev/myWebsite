import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './About.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function importAllImages(r) {
  return r.keys().map((key) => ({
    src: r(key),
    alt: key.replace('./', '').replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
  }));
}

// 📁 Import images from each category
const travelImages = importAllImages(require.context('../Assets/Images/Carousel/Travel', false, /\.(png|jpe?g|svg)$/));
const foodImages = importAllImages(require.context('../Assets/Images/Carousel/Food', false, /\.(png|jpe?g|svg)$/));
const sportsImages = importAllImages(require.context('../Assets/Images/Carousel/Sports', false, /\.(png|jpe?g|svg)$/));

function CarouselSection({ title, images, description }) {
  return (
    <section>
      <h2>{title}</h2>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </Carousel>
      <p>{description}</p>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I’m a designer, developer, and lifelong learner. My journey blends logic with creativity—
        from designing fluid UIs to brainstorming wild side projects. This space is my digital autobiography.
      </p>

      <CarouselSection
        title="Travel"
        images={travelImages}
        description="Exploring the world one step at a time—these snapshots capture my adventures and love for nature."
      />
      <CarouselSection
        title="Food"
        images={foodImages}
        description="From street eats to gourmet experiments, food is my creative outlet and comfort zone."
      />
      <CarouselSection
        title="Sports"
        images={sportsImages}
        description="Staying active keeps me grounded—whether it's team sports or solo challenges, I thrive on movement."
      />
    </section>
  );
}

export default About;
