import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
    authActionCreators,
    logout,
    modalSheet,
    sociallogin,
    getFilter,
    getAllProperties
} from "../store";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(
        Object.assign(
            {},
            authActionCreators,
            logout,
            sociallogin,
            modalSheet,
            getFilter,
            getAllProperties
        ),
        dispatch,
    );
};