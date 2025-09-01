import { Typewriter } from 'react-simple-typewriter';

export default function TypingIntro() {
  return (
    <div>
      <h1 style={{ margin: 0 }}>Hi, I'm Jacob and I enjoy</h1>

      <div
        style={{
          color: '#07bfea',
          fontWeight: 'bold',
          fontSize: '3rem',
        }}
      >
        <Typewriter
          words={[
            'Golfing',
            'Investing',
            'Dogs',
            'Coding',
            'Detroit Sports',
            'Traveling',
            'Lifting Weights',
            'Video Games',
            'Problem Solving',
            'MSU Sports',
            'Chess',
            'Unique Foods',
            'Fantasy Football',
            'Cars',
            'Music',
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </div>

    </div>
  );
}
