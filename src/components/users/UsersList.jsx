import { useSelector } from "react-redux";
import { selectAllUsers } from "../../features";

//Renderiza la lista de opciones de usuarios disponibles
const UsersList = () => {
    const users = useSelector(selectAllUsers);

    return (
        <>
            {users.map((user) => (
                <option key={user.id} value={user.id}>
                    {user.name}
                </option>
            ))}
        </>
    );
};

export default UsersList;
