import { useQuery } from "@tanstack/react-query";
import { fetchList } from "../api.ts";
import { Link } from "react-router-dom";

type Item = {
  id: string;
  sentence: string;
  description: string;
  date: string;
  link: string;
};

const Home = () => {
  const { data, isLoading } = useQuery<Item[]>({
    queryKey: ["list"],
    queryFn: fetchList,
  });
  return (
    <div>
      <h1>List</h1>
      {isLoading ? (
        <>Loading</>
      ) : (
        <ul>
          {data?.map((row) => (
            <li key={row.id}>
              <Link to={`/${row.id}`}>{row.sentence}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
