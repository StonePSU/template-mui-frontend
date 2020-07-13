import { SET_LOADING } from "../actionTypes";

const DEFAULT_STATE = false;

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_LOADING:
            return action.loading;
        default:
            return state;
    }

}