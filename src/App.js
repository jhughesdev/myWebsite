import './App.css';

import TypingIntro from './Components/TypingIntro'; // make sure this path matches your folder

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TypingIntro />
        <p>
          A little glimpse into my world — projects, passions, and the stuff that keeps me curious.
        </p>
        <nav>
          <a href="#about">About Me</a> |
          <a href="#projects">Projects</a> |
          <a href="#blog">Blog</a> |
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>I work hard, I care deeply, and I’m building something real. Here's my story.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p>Check out some things I've launched or contributed to—more coming soon.</p>
      </section>

      <section id="blog">
        <h2>Blog</h2>
        <p>Sometimes life gets messy. Here's where I unpack some of it.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Want to connect? Drop me a message on [LinkedIn, Twitter, email—you choose].</p>
      </section>
    </div>
  );
}

export default App;
