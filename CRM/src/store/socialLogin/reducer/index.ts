import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../actions-types';

interface RepositoriesStateInterface {
    s_loading: boolean;
    error: string | null;
    authToken: string;
    user_email: string;
    first_name: string;
    last_name: string;
    image: string;
    s_isAuthenticated: boolean;
}

const initialState = {
    s_loading: false,
    error: null,
    authToken: '',
    user_email: '',
    first_name: '',
    last_name: '',
    image: '',
    s_isAuthenticated: false,
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
            case ActionType.SOCIAL_LOGIN:
                draft.s_loading = true;
                draft.error = null;
                draft.authToken = '';
                draft.user_email = '';
                draft.first_name = '',
                    draft.image = '',
                    draft.last_name = '',
                    draft.s_isAuthenticated = false;
                return draft;
            case ActionType.SOCIAL_LOGIN_SUCCESS:
                draft.s_loading = false;
                draft.error = null;
                draft.first_name = action.payload.first_name,
                    draft.last_name = action.payload.last_name,
                    draft.authToken = action.payload.authToken;
                draft.image = action.payload.image;
                draft.user_email = action.payload.user_email;
                draft.s_isAuthenticated = true;
                return draft;
            case ActionType.SOCIAL_LOGIN_ERROR:
                draft.s_loading = false;
                draft.error = action.payload;
                draft.authToken = '';
                draft.user_email = '';
                draft.image = '';
                draft.first_name = '',
                    draft.last_name = '',
                    draft.s_isAuthenticated = false;
                return draft;

            case ActionType.SOCIAL_SET_AUTHENTICATION:
                draft.s_loading = false;
                draft.s_isAuthenticated = action.payload;
                return draft;

            default:
                return draft;
        }
    });

export default reducer;