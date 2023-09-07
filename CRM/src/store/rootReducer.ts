import { combineReducers } from 'redux';
import auth from '../store/login/reducer';

const reducers = combineReducers({
    auth,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;