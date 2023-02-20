const Admin = (props) => {

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
        
            {
            admins.map((admin, index1) => {
                return (
                        <tr>
                            <td key={index1}> {admin.name} </td>
                            <td> {admin.age} </td>
                            <td> {admin.salary}</td>
                        </tr>
                        );
                    })
                }
        
        </tbody>
    </table>
    ) : (
        null
    )
};

export { Admin };