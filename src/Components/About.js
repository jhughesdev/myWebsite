import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './About.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Helper to import images and clean up alt text
function importAllImages(r) {
  return r.keys().map((key) => ({
    src: r(key),
    alt: key
      .replace('./', '')
      .replace(/\.[^/.]+$/, '')
      .replace(/[-_]/g, ' '),
  }));
}

// Grab images from each category
const travelImages = importAllImages(require.context('../Assets/Images/Carousel/Travel', false, /\.(png|jpeg|svg|jpg)$/));
const foodImages = importAllImages(require.context('../Assets/Images/Carousel/Food', false, /\.(png|jpeg|svg|jpg)$/));
const sportsImages = importAllImages(require.context('../Assets/Images/Carousel/Sports', false, /\.(png|jpeg|svg|jpg)$/));

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
        I’m always chasing new experiences. Whether it’s exploring a new city, trying a dish I’ve never had, or picking up a sport I barely understand — I’m here for it. Life’s too short not to dive in.
      </p>

      <CarouselSection
        title="Travel"
        images={travelImages}
        description="I love getting out and seeing new places — the more off-the-beaten-path, the better."
      />
      <CarouselSection
        title="Food"
        images={foodImages}
        description="From cooking at home to finding hidden gem restaurants, food is one of my favorite ways to connect with people and culture."
      />
      <CarouselSection
        title="Sports"
        images={sportsImages}
        description="Born and raised in Michigan — I’ll always root for Detroit teams, win or lose."
      />
    </section>
  );
}

export default About;
