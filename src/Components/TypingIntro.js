import { Typewriter } from 'react-simple-typewriter';

export default function TypingIntro() {
  return (
    <h1>
      Hi, I'm Jacob and I like{' '}
      <span style={{ color: '#07bfea', fontWeight: 'bold' }}>
        <Typewriter
        words={[
          'Golfing',
          'Investing',
          'Dogs',
          'Coding',
          'Detroit Sports',
          'Traveling',
          'Lifting Weights',
          'Playing Video Games',
          'Problem Solving',
          'Michigan State Sports',
          'Playing Chess',
          'All Types of Food',
          'Fantasy Football',
          'Cars',
          'Listening to Music'
        ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </span>
    </h1>
  );
}
