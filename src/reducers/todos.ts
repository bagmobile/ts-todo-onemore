import {ActionTypes, ITodo, TodoAction} from "../actions";


export const todosReducer = <T extends TodoAction>(state: ITodo[] = [], action: T): ITodo[] => {

    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state;
    }
}

