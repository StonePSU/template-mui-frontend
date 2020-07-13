const validate = (inputs) => {
    let passwordRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let errors = [];

    if (!inputs.originalPassword) {
        errors.originalPassword = 'Original password is required'
    }

    if (!inputs.password) {
        errors.password = 'Password is required';
    } else {
        if (!passwordRE.test(inputs.password)) {
            errors.password = 'Password must be 8 characters long and contain at least 1 digit'
        }
    }

    if (inputs.originalPassword === inputs.password) {
        errors.password = 'New password cannot match original password';
    }

    return errors;
}

export default validate;