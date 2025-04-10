//  v19
export default function Hello({ stuli }) {
  let conage = stuli.age > 40;
  return (
    <h1>
      <ol>
        {stuli.map((stu) => (
          <li key={stu.name}>
            {stu.age > 40 ? (stu.name, stu.age, stu.role) : ""}
          </li>
        ))}
      </ol>
    </h1>
  );
}
