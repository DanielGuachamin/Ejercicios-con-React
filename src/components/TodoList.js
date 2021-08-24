import { useEffect, useRef, useState } from "react";
import "../styles/TodoList.css"

const TodoList = () =>{

    const [todoList, setTodoList] = useState([]);
    const [completed, setCompleted] = useState(false);
    const inputTask = useRef(null);

    useEffect(() => {

        const getData = async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users/1/todos"
            );
            const data = await response.json();
            setTodoList(data);
        };

        getData();
    }, []);

    if (!todoList) {
        return "Cargando datos...";
    }


    const handleAddTask = () => {
        const newTodo = inputTask.current.value;
        setTodoList((prevState) => [...prevState, newTodo]);
        inputTask.current.value = "";
    }

    const handleDeleteTask = (positionToDelete) => {
        const newTodos = todoList.filter(
            (todoList, taskPosition) => taskPosition !== positionToDelete
        );
        setTodoList(newTodos);
    };

    const handleCompleteTask = (positionToComplete) => {
        setCompleted(!completed);
    };

    return (
        <div>
            <div>
                <label htmlFor="todo">Tarea</label>
                <input type="text" id="todo" ref={inputTask} />
                <button onClick={handleAddTask}>Agregar tarea</button>
            </div>
            <h1>
                Lista de tareas ({todoList.length} en total)
            </h1>
            <div>
                <table>
                    <thead>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Estado
                        </th>
                        <th>
                            Eliminar
                        </th>
                        </thead>
                    <tbody>
                    {todoList.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.title}</td>
                            <td>
                                <div className={todo.completed === "true" ? "Completada" : "No-completada"}/>
                                    <button onClick={handleCompleteTask}>
                                        {completed ? "Completada" : "Marcar como completada"}
                                    </button>
                            </td>
                            <td>
                                <button onClick={() => handleDeleteTask(index)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
};

export default TodoList