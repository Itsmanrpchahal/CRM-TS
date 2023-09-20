import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';
import { apiUri } from '../../../service/apiEndPoints';
import service from '../../../service/axios';

/**
 *
 * @param data
 */
export const getAllProperties = (limit: any) => {
    return async (dispatch: Dispatch<Action | any>) => {
        dispatch({
            type: ActionType.GET_ALL_PROPERTIES,
        });

        try {
            const response = await service.get(apiUri.surfMLP.getProperties + limit.limit);

            if (response?.data?.success) {
                dispatch({
                    type: ActionType.GET_ALL_PROPERTIES_SUCCESS,
                    payload: response.data,
                })
                return response;
            }

            return response;
        } catch (e: any) {
            dispatch({
                type: ActionType.GET_ALL_PROPERTIES_ERROR,
                payload: 'Invalid email/password',
            });
        }
    };
};
