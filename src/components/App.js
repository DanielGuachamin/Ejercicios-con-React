import '../styles/App.css';
import ChangeUser from "./ChangeUser";
import UserInfo from "./UserInfo";
import {useEffect, useState} from "react";
import TodoList from "./TodoList";

function App() {
    /*
    const [changeUser, setChangeUser] = useState(1);

    const handleChangeId = (value) => {
        setChangeUser(changeUser + value)
    } ;

    return (
        <div>
            <div>
                <h1>Tarea: Practica para uso de useState y useEffect</h1>
                <button onClick={() => handleChangeId(-1)}>Anterior Usuario</button>
                Usted está viendo el usuario {changeUser}
                <button onClick={() => handleChangeId(1)}>Siguiente Usuario</button>
            </div>
            < UserInfo />
        </div>
    );
     */

    return(
        <div>
        < UserInfo />
        < TodoList />
        </div>
    );
}

export default App;
