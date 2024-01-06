import { useParams } from "react-router-dom";
import { fetchItem } from "../api.ts";
import { useQuery } from "@tanstack/react-query";

const Item = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["item", id],
    queryFn: () => fetchItem(id!),
  });

  return <div>{data?.content}</div>;
};

export default Item;
