// 0 - v13
// // function Hello(props) {
// function Hello({ stuli }) {
//   // const { message, name } = props;
//   return (
//     <h1>
//       <ol>
//         {stuli.map((stu) => (
//           <li key={stu}>{stu}</li>
//         ))}
//       </ol>
//     </h1>
//   );
// }

// export default Hello;

// function Hello(props) {

//  v14
export default function Hello({ stuli }) {
  return (
    <h1>
      <ol>
        {stuli.map((stu) => (
          <li key={stu.name}>
            {stu.name} {stu.age} {stu.role}
          </li>
        ))}
      </ol>
    </h1>
  );
}
