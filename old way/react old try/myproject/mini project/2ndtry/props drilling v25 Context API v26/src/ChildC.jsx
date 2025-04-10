import { fName, lName } from "./App";

export default function ChildC() {
  return (
    <>
      <fName.Consumer>
        {
          // this fName is just a function parametor. we can use any thing
          (fName) => {
            // return ;
            return (
              <>
                <lName.Consumer>
                  {(lName) => {
                    return (
                      <>
                        <h1>ChildC</h1>
                        <h1>fname: {fName}</h1>
                        <h1>lname: {lName}</h1>
                      </>
                    );
                  }}
                </lName.Consumer>
              </>
            );
          }
        }
      </fName.Consumer>
    </>
  );
}
