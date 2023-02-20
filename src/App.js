import { useState } from "react";
import { User } from "./Component/User";
import { Admin } from "./Component/Admin";

function App() {

const [isUser, setIsUser] = useState(false);
const [isAdmin, setIsAdmin] = useState(false);

const empList = [
    { id: 1, name: "Alice" , age:30 , salary : 30000},
    { id: 2, name: "Bob" , age:34 , salary : 40000},
    { id: 3, name: "David" , age:33 , salary : 38000},
    { id: 4, name: "Eden", age:21 , salary : 31000}
  ];

  const adminList = [
    { name: "admin1" , age:30 , salary : 30000},
    { name: "admin2" , age:34 , salary : 40000},
    { name: "admin3" , age:33 , salary : 38000},
    { name: "admin4", age:21 , salary : 31000}
  ];

  const userButton = () => {
    setIsUser(!isUser);
  };

  const adminButton = () => {
    setIsAdmin(!isAdmin); 
  }
  console.log('Render isUser: ', isUser);
  console.log('Render isAdmin: ' , isAdmin);

  return (
    <div>
        <button onClick = {userButton}> User Details </button> 
        <User isUser = {isUser} users = {empList} />
        <button onClick = {adminButton}> Admin Details </button>
        <Admin isAdmin = {isAdmin} admins = {adminList} />
    </div> 
  );
}
export default App;
