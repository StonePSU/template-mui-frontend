import { SET_PAGE_ERROR } from "../actionTypes";

export function setPageError(error) {
    return {
        type: SET_PAGE_ERROR,
        error
    }
}