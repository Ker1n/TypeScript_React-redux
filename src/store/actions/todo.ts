import { Dispatch } from "react"
import axios from 'axios';
import { TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodo = (page = 1 , limit = 10) =>  {
    return async (dispatch: Dispatch<TodoAction> ) => { 
        try {
            dispatch({
                type: TodoActionTypes.FETCH_TODO
            })
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos',
                {
                    params:{
                        _page: page, 
                        _limit: limit
                    }
                } 
            )
            setTimeout(() => {
                dispatch({
                    type:  TodoActionTypes.FETCH_TODO_SUCCESS,
                    payload: response.data
                })
            }, 1000);
        } catch (error) {
            dispatch({
                type: TodoActionTypes.FETCH_TODO_ERROR,
                payload: 'something went wrong with todo'
            })
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {
        type: TodoActionTypes.SET_TODO_PAGE,
        payload: page    
    }
}