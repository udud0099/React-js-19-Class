import { useState } from "react";

export default function Form() {
  const [name, setName] = useState();
  return (
    <>
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
    </>
  );
}
