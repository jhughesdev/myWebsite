// Components/Projects.js
import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
    <p>Here’s a list of projects I've built</p>
    <ul>
      <li><strong>Portfolio Website</strong> – This very site you're browsing 👀</li>
      <li><strong>NFL Team Builder Web App</strong> – Built with Flask; integrated ESPN APIs to track 500+ NFL player stats.</li>
      <li><strong>Portfolio Web App</strong> – Created Flask app with résumé, real-time chat, NFT marketplace, and interactive piano.</li>
      <li><strong>Cancer Classification: X-Rays</strong> – Used TensorFlow to build models (max 89% accuracy); authored research.</li>
      <li><strong>Discord Restaurant Finder Bot</strong> – Wrote Node.js to efficiently query 170,000+ restaurants via Restaurants.com.</li>
      <li><strong>Task Tracker</strong> – C++ calendar app with customizable UI, XML I/O, and multi-view (day–year) support.</li>
      <li><strong>SpartyKnome</strong> – Collaborated on 2D C++ platformer with custom levels & special items using Git, Trello, XML.</li>
      <li><strong>Harold’s Laboratory</strong> – Developed animation system in C++ supporting actor control & XML-driven storytelling.</li>
    </ul>
    <p>More to come soon!</p>
    </section>
  );
}

export default Projects;
