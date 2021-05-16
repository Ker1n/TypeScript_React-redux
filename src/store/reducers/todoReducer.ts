import { TodoAction, TodoActionTypes, TodoState } from '../../types/todo';

const initialState: TodoState = { 
    todo: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const todoReducer = (state = initialState , action: TodoAction): TodoState => { 
    switch (action.type) {

        case TodoActionTypes.FETCH_TODO:
            return {
                ...state, loading: true
            }

        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return {
                ...state, loading: false, todo:  action.payload
            }

        case TodoActionTypes.SET_TODO_PAGE:
            return {
                ...state, loading: false, page: action.payload
            }

        case TodoActionTypes.FETCH_TODO_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }

        default: 
          return state
    }
}