import {useState} from "react";

const ChangeUser = () => {
    const [changeUser, setChangeUser] = useState(1);

    const handleChangeId = (value) => {
       setChangeUser(changeUser + value)
    } ;

    return (
        <div>
            <h1>Tarea: Implementar useState y useEffect</h1>
            <button onClick={() => handleChangeId(-1)}>Anterior Usuario</button>
            Usted está viendo el usuario {changeUser}
            <button onClick={() => handleChangeId(1)}>Siguiente Usuario</button>
        </div>
    );
};

export default ChangeUser;
