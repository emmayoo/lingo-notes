import useBearStore from "../../store.ts";

const Quiz = () => {
  const list = useBearStore((state) => state.list);

  return (
    <div>
      <h1>Quiz</h1>
      <ul>
        {list.map((l) => (
          <li id={l.id}>{l.sentence}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
