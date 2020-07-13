import { SET_LOADING } from "../actionTypes";

export const setLoading = (loading = false) => {
    return {
        type: SET_LOADING,
        loading
    }
}