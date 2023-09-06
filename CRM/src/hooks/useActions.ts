import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { } from "../store/store";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(
        Object.assign(
            {},
        ),
        dispatch,
    );
};