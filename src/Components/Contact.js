// src/components/Contact.js
import React from 'react';
import './Contact.css';
import linkedinLogo from '../Assets/Images/LinkedInLogo.png';
import githubLogo from '../Assets/Images/GithubLogo.jpg';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        Let’s connect! Whether it’s a collaboration idea, feedback, or just a “hey 👋,” I’d love to hear from you.
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><strong>Email:</strong> <a href="mailto:jacobryanhughes@outlook.com">jacobryanhughes@outlook.com</a></li>
        <li>
          <a href="https://www.linkedin.com/in/jacob-hughes-0735a723a/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" style={{ height: '24px' }} />
          </a>
        </li>
        <li>
          <a href="https://github.com/jhughesdev" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" style={{ height: '24px' }} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
