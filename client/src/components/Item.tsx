import { useLocation, useParams } from "react-router-dom";
import { fetchItem } from "../api.ts";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

// https://tomoharutsutsumi.medium.com/making-new-line-in-react-and-json-4607aa8827ff
const LineBreak = styled.div`
  white-space: pre-line;
  vertical-align: bottom;
`;

const Item = () => {
  let {
    state: { data: info },
  } = useLocation();
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["item", id],
    queryFn: () => fetchItem(id!),
  });

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
