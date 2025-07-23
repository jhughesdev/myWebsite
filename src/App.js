import './App.css';
import TypingIntro from './Components/TypingIntro';
import About from './Components/About'; // new About component
import Projects from './Components/Projects'; // optional future components
import Blog from './Components/Blog';
import Contact from './Components/Contact';

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

      <main>
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;
