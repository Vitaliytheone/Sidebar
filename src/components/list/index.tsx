import { observer } from "mobx-react-lite";
import todo from "../../store/todo";
import Todo from "../todo";

const TodoList = () => {
    return (
        <>
            {todo.todos.map((i) => {
                return <Todo key={i.id} value={i.value} id={i.id} />;
            })}
        </>
    );
};

export default observer(TodoList);
