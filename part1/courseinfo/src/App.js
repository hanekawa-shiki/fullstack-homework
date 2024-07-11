const Header = props => <h1>{props.course.name}</h1>;

const Part = props => {
  const { name, exercises } = props;
  return (
    <p>
      {name} {exercises}
    </p>
  );
};
const Content = props => {
  const {
    course: { parts }
  } = props;
  return (
    <div>
      {parts.map(({ name, exercises }, index) => {
        return <Part name={name} exercises={exercises} key={index} />;
      })}
    </div>
  );
};

const Total = props => {
  const {
    course: { parts }
  } = props;
  let total = 0;
  parts.forEach(({ exercises }) => {
    total = total + exercises;
  });
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
