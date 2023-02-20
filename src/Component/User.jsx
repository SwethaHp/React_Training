const User = (props) => {

    const { isUser, users } = props;
    
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

               {
                users.map((user, index) => {
                    return (
                        <tr>
                            <td key={index}> {user.id} </td>
                            <td>{user.name}</td>
                            <td> {user.age} </td>
                            <td> {user.salary}</td>
                        </tr>
                        );
                    })
                }

            </tbody>
        </table>
    ) : (
         null
    );
};

export { User};