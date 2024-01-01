import { useEffect, useState } from "react";

type Item = {
  id: string;
  sentence: string;
  description: string;
  date: string;
  link: string;
};

const Home = () => {
  const [list, setList] = useState<Item[]>([]);
  useEffect(() => {
    (async () => {
      const data = await (await fetch("http://localhost:8080")).json();
      setList(data);
    })();
  }, []);
  return (
    <div>
      <h1>List</h1>
      <ul>
        {list.map((row) => (
          <li key={row.id}>{row.sentence}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
