import { ActionType } from '../actions-types';

interface LoginAction {
    type: ActionType.LOGIN;
}

interface LoginSuccessAction {
    type: ActionType.LOGIN_SUCCESS;
    payload: LoginSuccessResponseObject;
}

interface LoginSuccessResponseObject {
    authToken: string;
    user_email: string;
}

interface LoginErrorAction {
    type: ActionType.LOGIN_ERROR;
    payload: string;
}

interface SetAuthentication {
    type: ActionType.SET_AUTHENTICATION;
    payload: boolean;
}


export type Action =
    | LoginAction
    | LoginSuccessAction
    | LoginErrorAction
    | SetAuthentication