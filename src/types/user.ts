export const FETCH_USERS: string = "FETCH_USERS";
export const FETCH_USERS_SUCCESS: string = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR: string = "FETCH_USERS_ERROR";

export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

// interface UserAction {
//     type: string;
//     payload?: any;
// }

interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
}
interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUserAction
  | FetchUserSuccessAction
  | FetchUserErrorAction;
