import { makeAutoObservable } from "mobx";
import { arrayMove } from "@dnd-kit/sortable";

export type TTodo = {
    id: string;
    value: string;
}

interface TStore {
    todos: Array<TTodo>;
    addTodo: (todo: TTodo) => void;
    updateTodo: (id: string, value: string) => void;
    removeTodo: (id: string) => void;
    moveTodo: (activeId: string, overId: string | null) => void;
}

class Store implements TStore {
    todos: TTodo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo: TTodo) {
        this.todos.push(todo);
    }

    updateTodo(id: string, value: string) {
        const idx = this.todos.findIndex((item) => item.id === id)
        this.todos[idx].value = value;
    }

    removeTodo(id: string) {
        this.todos = this.todos.filter((item) => item.id !== id)
    }

    moveTodo(activeId: string, overId: string | null) {
        if (activeId !== overId) {
        const oldIndex = this.todos.findIndex((item) => item.id === activeId);
        const newIndex = this.todos.findIndex((item) => item.id === overId);
        this.todos = arrayMove(this.todos, oldIndex, newIndex);
        }
    }

}

export default new Store();