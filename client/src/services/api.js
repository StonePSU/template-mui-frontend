import axios from 'axios';

const setTokenHeader = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.commmon["Authorization"];
    }
}

const api = (method, path, data) => {
    return new Promise((resolve, reject) => {
        axios[method](path, data)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.response.data);
            })
    })
}

const upload = (path, formData) => {
    return new Promise(function (resolve, reject) {
        axios.post(path, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.response.data);
            })
    })
}

export { api, setTokenHeader, upload };