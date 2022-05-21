import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import todo from "../../store/todo";
import Todo from "../todo";

const TodoList = () => {
    const arr = toJS(todo.todos);
    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (e: DragEndEvent) => {
        const { active, over } = e;
        todo.moveTodo(active.id as string, over?.id as string);
    };

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={arr} strategy={verticalListSortingStrategy}>
                {arr.map((i) => {
                    return <Todo key={i.id} value={i.value} id={i.id} />;
                })}
            </SortableContext>
        </DndContext>
    );
};

export default observer(TodoList);
