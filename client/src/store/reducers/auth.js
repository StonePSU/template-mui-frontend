import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT = {
    isAuthenticated: false,
    user: null
};

export default (state = DEFAULT, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: Object.keys(action.user).length > 0 ? true : false,
                user: action.user
            };
        default:
            return state;
    }

}