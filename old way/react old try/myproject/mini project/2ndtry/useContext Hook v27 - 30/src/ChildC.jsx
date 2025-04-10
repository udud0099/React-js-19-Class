import { useContext } from "react";
import { fName, lName } from "./App";

export default function ChildC() {
  // this firstName is just a var. we can't use same name thing
  const firstName = useContext(fName);
  const lastName = useContext(lName);
  return (
    <>
      <h1>
        this first Name : {firstName} and this is last name : {lastName}
      </h1>
      {/* <fName.Consumer>
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
      </fName.Consumer> */}
    </>
  );
}
