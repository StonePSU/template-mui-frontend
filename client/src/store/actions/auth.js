import { SET_CURRENT_USER } from "../actionTypes";
import { api, setTokenHeader } from "../../services/api";
import { setPageError } from "./error";
import { setLoading } from "./loading";

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function registerUser(path, user) {
    return dispatch => {
        dispatch(setPageError(null));
        dispatch(setLoading(true));

        return new Promise(function (resolve, reject) {

            api("post", path, user)
                .then((res) => {
                    localStorage.setItem("token", res.token);
                    setTokenHeader(res.token);
                    dispatch(setCurrentUser(res.user));
                    dispatch(setLoading(false));
                    resolve();
                })
                .catch((err) => {
                    dispatch(setPageError("There was an error"));
                    dispatch(setLoading(false));
                    reject(err);
                })
        });
    }
}

export function logoutUser() {
    return dispatch => {
        localStorage.removeItem("token");
        dispatch(setCurrentUser({}));
    }
}