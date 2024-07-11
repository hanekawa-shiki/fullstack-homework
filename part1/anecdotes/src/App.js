import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];
  const length = anecdotes.length;
  const [selected, setSelected] = useState(0);
  const [points, setPoint] = useState(new Array(length).fill(0));
  const [mostVoteIndex, setMostVoteIndex] = useState(0);

  const getRandNum = () => {
    const max = length - 1;
    return Math.floor(Math.random() * (max + 1));
  };
  const handleClick = () => {
    const index = getRandNum();
    setSelected(index);
  };
  const handleVote = () => {
    const myPoints = [...points];
    myPoints[selected] += 1;
    const maxNum = Math.max(...myPoints);
    const mostVoteIndex = myPoints.findIndex(item => item === maxNum);
    setMostVoteIndex(mostVoteIndex);
    setPoint(myPoints);
  };
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {points[selected]} votes
      <br />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdotes</button>
      <h1>Anecdote with the most votes</h1>
      <br />
      {anecdotes[mostVoteIndex]}
      <br />
      has {points[mostVoteIndex]} votes
    </div>
  );
};

export default App;
