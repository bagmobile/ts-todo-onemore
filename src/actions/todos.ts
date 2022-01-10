import axios from "axios";
import {Dispatch} from "redux";
import {ActionTypes} from "./types";


export type TodoAction = IFetchTodosAction | IDeleteTodoAction

export interface ITodo {
    id: number,
    title: string,
    completed: boolean
}

export interface IFetchTodosAction {
    type: ActionTypes.fetchTodos,
    payload: ITodo[]
}

export interface IDeleteTodoAction {
    type: ActionTypes.deleteTodo,
    payload: number
}

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
        dispatch<IFetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    }
}

export const deleteTodo = (id: number): IDeleteTodoAction => ({
    type: ActionTypes.deleteTodo,
    payload: id
})
