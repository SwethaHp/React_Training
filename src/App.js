import { useState } from "react";

function App() {

const [isUser, setUserDetails] = useState(false);
const [isAdmin, setAdminDetails] = useState(false);

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
    setUserDetails(!isUser);
  };

  const adminButton = () => {
    setAdminDetails(!isAdmin);
  }
  console.log('Render isUser: ', isUser);
  console.log('Render isAdmin: ' , isAdmin);

  return (
    <div>
        <button onClick={userButton}>User Details </button> 
        <UserDto isUser={isUser} users={empList} />
        <button onClick={adminButton}>Admin Details </button>
        <AdminDto isAdmin={isAdmin} admins={adminList} />
    </div>
  );
}

function UserDto(props) {
    const { users, isUser } = props;
    console.log("fetched user details here");
    return isUser ? (
        <table>
            <tbody>
            <tr>
                <th>"ID"</th>
                <th>"NAME"</th>
                <th>"AGE"</th>
                <th>"SALARY"</th>
            </tr>
            <tr>
                <td>{users[0].id}</td>
                <td>{users[0].name}</td>
                <td>{users[0].age}</td>
                <td>{users[0].salary}</td>
            </tr>
            <tr>
                <td>{users[1].id}</td>
                <td>{users[1].name}</td>
                <td>{users[1].age}</td>
                <td>{users[1].salary}</td>
            </tr>
            <tr>
                <td>{users[2].id}</td>
                <td>{users[2].name}</td>
                <td>{users[2].age}</td>
                <td>{users[2].salary}</td>
            </tr>
            <tr>
                <td>{users[3].id}</td>
                <td>{users[3].name}</td>
                <td>{users[3].age}</td>
                <td>{users[3].salary}</td>
            </tr>
            </tbody>
        </table>
    ) : (
         <p></p>
    );
}

function AdminDto(props) {
    const {isAdmin, admins } = props;
    console.log("Fetched admin details here");
    return isAdmin ? (
    <table>
        <tbody>
        <tr>
            <th>"NAME"</th>
            <th>"AGE"</th>
            <th>"SALARY"</th>
        </tr>
        <tr>
            <td>{admins[0].name}</td>
            <td>{admins[0].age}</td>
            <td>{admins[0].salary}</td>
        </tr>
        <tr>
            <td>{admins[1].name}</td>
            <td>{admins[1].age}</td>
            <td>{admins[1].salary}</td>
        </tr>
        <tr>
            <td>{admins[2].name}</td>
            <td>{admins[2].age}</td>
            <td>{admins[2].salary}</td>
        </tr>
        <tr>
            <td>{admins[3].name}</td>
            <td>{admins[3].age}</td>
            <td>{admins[3].salary}</td>
        </tr>
        </tbody>
    </table>
    ) : (
        <p></p>
    )
}

export default App;
