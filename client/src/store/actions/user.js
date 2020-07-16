import { setPageError } from "./error";
import { setLoading } from "./loading";
import { upload, api } from "../../services/api.js";
import { setCurrentUser, logoutUser } from "./auth";

export function uploadProfileImage(path, formData) {

    return dispatch => {
        // call api to upload image
        dispatch(setPageError(null));
        dispatch(setLoading(true));
        upload(path, formData)
            .then((user) => {
                // if successful, reset the current user based on the object passed back
                dispatch(setCurrentUser(user));
                dispatch(setLoading(false));
                dispatch(setPageError(null));
            })
            .catch((err) => {
                // if error, set the page error
                dispatch(setPageError(err));
                dispatch(setLoading(false));
                if (err === 'Unauthorized') {
                    dispatch(logoutUser())
                }
            })

    }

}

export function changePassword(path, data) {
    return dispatch => {
        // set loading and page error
        dispatch(setPageError(null));
        dispatch(setLoading(true));
        // call api to update password
        return new Promise(function (resolve, reject) {
            api('post', path, data)
                .then((user) => {
                    // if successful, set loading and page error
                    dispatch(setCurrentUser(user));
                    dispatch(setLoading(false));
                    dispatch(setPageError("Password successfully changed!"));
                    resolve();
                })
                .catch((err) => {
                    // if error, set loading and page error
                    dispatch(setPageError(err));
                    dispatch(setLoading(false));
                    if (err === 'Unauthorized') {
                        dispatch(logoutUser())
                    }
                    reject();
                })
        })




    }
}

export function updateUser(path, data) {
    return dispatch => {
        // set page loading and page error values
        dispatch(setPageError(null));
        dispatch(setLoading(true));

        return new Promise(function (resolve, reject) {
            // make api call to update the user
            api('patch', path, data)
                // if update is successful, update the state for the current user
                .then(res => {
                    dispatch(setPageError("Profile information has been saved"));
                    dispatch(setLoading(false));
                    dispatch(setCurrentUser(res));
                    resolve();
                })
                .catch(err => {
                    console.log(err);
                    dispatch(setPageError(err));
                    dispatch(setLoading(false));
                    if (err === 'Unauthorized') {
                        dispatch(logoutUser())
                    }
                    reject();
                })

            // if error, set the page loading and page error values
        })
    }
}
