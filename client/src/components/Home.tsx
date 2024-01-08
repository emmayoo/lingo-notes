import { useQuery } from "@tanstack/react-query";
import { fetchList } from "../api.ts";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useBearStore, { ItemType } from "../store.ts";

const ItemBox = styled.div`
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  margin: 1px;
`;

const Home = () => {
  const { data, isLoading, isSuccess } = useQuery<ItemType[]>({
    queryKey: ["list"],
    queryFn: fetchList,
  });

  const { setList } = useBearStore((state) => state.actions);

  if (isSuccess) {
    setList(data);
  }

  return (
    <div>
      <h1>List</h1>
      {isLoading ? (
        <>Loading</>
      ) : (
        <ul>
          {data?.map((row) => (
            <li key={row.id}>
              <Link to={`/${row.id}`} state={{ data: row }}>
                <ItemBox>
                  <div>{row.sentence}</div>
                  <div>{row.translate}</div>
                  <div>{row.date}</div>
                  <div>{row.link}</div>
                  <div>{row.lang}</div>
                </ItemBox>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
