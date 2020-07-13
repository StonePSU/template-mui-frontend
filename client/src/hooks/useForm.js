import React, { useState } from 'react';

const useForm = (callback, validate) => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});

    // call the callback function to handle form submit processing
    const handleSubmit = (e) => {
        e.preventDefault();
        // e.persist();
        let err = validate(inputs);
        console.log(err);
        setErrors(err);
        // only allow the submit callback to be executed if there are no errors
        if (Object.keys(err).length < 1) {
            callback();
        }
    }

    // function to set the state using the useState hook
    const handleInputChange = (e) => {
        e.persist();

        // accepts previous state as input parameter
        // adds field value to state
        setInputs((prev) => {
            return { ...inputs, [e.target.name]: e.target.value };
        })
    }

    // object returned from the hook
    return {
        handleSubmit,
        handleInputChange,
        inputs,
        errors,
        setInputs
    };
}

export default useForm;