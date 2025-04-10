import { useParams } from "react-router-dom";

export default function Products() {
  const { id } = useParams();
  return (
    <>
      <h1>Products list Pages {id}</h1>
    </>
  );
}
