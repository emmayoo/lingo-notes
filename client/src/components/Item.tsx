import { useLocation, useParams } from "react-router-dom";
import { fetchItem } from "../api.ts";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import useBearStore from "../store.ts";
import { useEffect } from "react";

// https://tomoharutsutsumi.medium.com/making-new-line-in-react-and-json-4607aa8827ff
const LineBreak = styled.div`
  white-space: pre-line;
  vertical-align: bottom;
`;

const Item = () => {
  const contents = useBearStore((state) => state.contentById);
  const { setContentById } = useBearStore((state) => state.actions);

  const {
    state: { data: info },
  } = useLocation();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["item", id],
    queryFn: () => fetchItem(id!),
    enabled: contents[id!] === undefined,
  });

  useEffect(() => {
    setContentById(id!, data?.content);
  }, [data, id, setContentById]);

  return (
    <div>
      <h1>{info.sentence}</h1>
      <div>{info.translate}</div>
      <br />
      <LineBreak>{data?.content}</LineBreak>
    </div>
  );
};

export default Item;
