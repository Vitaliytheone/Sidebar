import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import todo from "../../store/todo";
import Todo from "../todo";

const TodoList = () => {
    const arr = toJS(todo.todos);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    // function handleDragEnd(e: any) {
    //     const { active, over } = e;

    //     if (active.id !== over.id) {
    //         setItems((items) => {
    //             const oldIndex = items.indexOf(active.id);
    //             const newIndex = items.indexOf(over.id);

    //             return arrayMove(items, oldIndex, newIndex);
    //         });
    //     }
    // }

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter}>
            <SortableContext items={arr} strategy={verticalListSortingStrategy}>
                {arr.map((i) => {
                    return <Todo key={i.id} value={i.value} id={i.id} />;
                })}
            </SortableContext>
        </DndContext>
    );
};

export default observer(TodoList);
