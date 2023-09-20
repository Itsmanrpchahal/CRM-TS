import { Dispatch } from 'redux';
import { ActionType } from '../actions-types';
import { Action } from '../actions';
import { apiUri } from '../../../service/apiEndPoints';
import service, { setAuthInitalToken } from '../../../service/axios';
import { storeData } from 'storage';
import { storageConstants } from '../../../storage/storage-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 *
 * @param data
 */
export const sociallogin = (data: any) => {
    return async (dispatch: Dispatch<Action | any>) => {
        dispatch({
            type: ActionType.SOCIAL_LOGIN,
        });

        try {
            const response = await service.post(apiUri.auth.socialLogin, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            if (response?.data?.success) {
                setAuthInitalToken(response.data.data.authToken);
                await storeData(storageConstants.authToken, response.data.data.authToken);

                AsyncStorage.setItem('TOKEN', "" + response.data.data.authToken)
                AsyncStorage.setItem('user_email', response.data.data.user_email)
                await dispatch(
                    setUser({
                        authToken: response.data.data.authToken,
                        user_email: response.data.data.user_email
                    }),
                );
                dispatch(setSAuthentication(true));
                return response;

            } else {
                dispatch(setSAuthentication(false));
            }

            return response;
        } catch (e: any) {
            dispatch({
                type: ActionType.SOCIAL_LOGIN_ERROR,
                payload: 'Invalid email/password',
            });
        }
    };
};

/**
 * @param value
 */
export const setSAuthentication = (value: boolean) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SOCIAL_SET_AUTHENTICATION,
            payload: value,
        });
    };
};

/**
 *
 */
export const setUser = (fn: any) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SOCIAL_LOGIN_SUCCESS,
            payload: {
                authToken: fn?.authToken,
                user_email: fn?.user_email,
            },
        });
    };
};
