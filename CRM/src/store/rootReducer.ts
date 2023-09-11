import { combineReducers } from 'redux';
import auth from '../store/login/reducer';
import modalSheet from '../store/global_modal/reducer'

const reducers = combineReducers({
    auth,
    modalSheet
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;