import { SET_PAGE_ERROR } from "../actionTypes";

const defaultState = null;

export default function pageError(state = defaultState, action) {

    switch (action.type) {
        case SET_PAGE_ERROR:
            return action.error;
        default:
            return state;
    }
}
