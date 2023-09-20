import { combineReducers } from 'redux';
import auth from '../store/login/reducer';
import logout from '../store/logout/reducer';
import socialLogin from '../store/socialLogin/reducer';
import modalSheet from '../store/global_modal/reducer'
import getFilterData from '../store/getFilter/reducer'
import getAllPPropertiesData from '../store/getAllProperites/reducer'

const reducers = combineReducers({
    auth,
    logout,
    socialLogin,
    modalSheet,
    getFilterData,
    getAllPPropertiesData
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;