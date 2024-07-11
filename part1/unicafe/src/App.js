import { useState } from 'react';

const Herder = props => <h1>{props.title}</h1>;

const Button = props => {
  const { count, setCount, text } = props;
  const handleClick = () => {
    setCount(count + 1);
  };
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = props => {
  const { text, value } = props;
  return (
    <tr>
      <th>{text}</th>
      <th>{value}</th>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const h1 = 'give feedback';
  const h2 = 'statistics';
  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = (good / all) * 100;
  return (
    <div>
      <Herder title={h1} />
      <Button text="good" count={good} setCount={setGood} />
      <Button text="neutral" count={neutral} setCount={setNeutral} />
      <Button text="bad" count={bad} setCount={setBad} />

      <Herder title={h2} />
      {all > 0 && (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
