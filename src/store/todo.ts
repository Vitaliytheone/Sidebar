import { makeAutoObservable } from "mobx";

export type TTodo = {
    id: string;
    value: string;
}

interface TStore {
    todos: Array<TTodo>;
    addTodo: (todo: TTodo) => void;
    updateTodo: (id: string, value: string) => void;
    removeTodo: (id: string) => void;
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

}

export default new Store();