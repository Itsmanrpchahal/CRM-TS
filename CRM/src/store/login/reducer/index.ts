import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../actions-types';

interface RepositoriesStateInterface {
    loading: boolean;
    error: string | null;
    authToken: string;
    user_email: string;
    u_first_name: string;
    u_last_name: string;
    u_image: string;
    isAuthenticated: boolean;
}

const initialState = {
    loading: false,
    error: null,
    authToken: '',
    user_email: '',
    u_first_name: '',
    u_last_name: '',
    u_image: '',
    isAuthenticated: false,
};

/**
 * @param state
 * @param action
 */
const reducer = (
    state: RepositoriesStateInterface = initialState,
    action: Action,
): RepositoriesStateInterface =>
    produce(state, draft => {
        switch (action.type) {
            case ActionType.LOGIN:
                draft.loading = true;
                draft.error = null;
                draft.authToken = '';
                draft.user_email = '';
                draft.u_first_name = '';
                draft.u_image = '';
                draft.u_last_name = '';
                draft.isAuthenticated = false;
                return draft;
            case ActionType.LOGIN_SUCCESS:
                draft.loading = false;
                draft.error = null;
                draft.u_first_name = action.payload.u_first_name;
                draft.u_last_name = action.payload.u_last_name;
                draft.u_image = action.payload?.u_image;
                draft.authToken = action.payload.authToken;
                draft.user_email = action.payload.user_email;
                draft.isAuthenticated = true;
                return draft;
            case ActionType.LOGIN_ERROR:
                draft.loading = false;
                draft.error = action.payload;
                draft.authToken = '';
                draft.u_image = '';
                draft.user_email = '';
                draft.isAuthenticated = false;
                return draft;

            case ActionType.SET_AUTHENTICATION:
                draft.loading = false;
                draft.isAuthenticated = action.payload;
                return draft;

            default:
                return draft;
        }
    });

export default reducer;