import { useEffect, useState } from "react";

const UserInfo = () => {
    const [changeUser, setChangeUser] = useState(1);
    const [user, setUser] = useState(null);
    const [urlJson, setUrlJson] = useState("https://jsonplaceholder.typicode.com/users/");

    useEffect(() => {

        const getData = async () => {
            const response = await fetch(
                urlJson + changeUser
            );
            const data = await response.json();
            setUser(data);
        };

        getData();
    }, []);

    useEffect( ()=> {
        console.log(urlJson + changeUser)
    },[changeUser])

    const handleChangeId = (value) => {
        setChangeUser(changeUser + value)
    } ;

    if (!user) {
        return "Cargando datos...";
    }

    return (
        <div>
            <div>
                <h1>Tarea: Practica para uso de useState y useEffect</h1>
                <button onClick={() => handleChangeId(-1)}>Anterior Usuario</button>
                Usted está viendo el usuario {changeUser}
                <button onClick={() => handleChangeId(1)}>Siguiente Usuario</button>
            </div>
            <div>
                <h1>
                    Información de usuario
                </h1>
                <div>
                    <strong>Nombre:</strong> {user.name}
                </div>
                <div>
                    <strong>Usuario:</strong> {user.username}
                </div>
                <div>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                </div>
                <div>
                    <strong>Web:</strong> <a href={user.website}>{user.website}</a>
                </div>
                <div>
                    <strong>Teléfono:</strong> {user.phone}
                </div>
                </div>
        </div>
    );
};

export default UserInfo;