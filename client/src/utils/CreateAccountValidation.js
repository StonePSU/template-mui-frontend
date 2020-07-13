const validate = (inputs, signup) => {
    let errors = {};
    let emailRE = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    let passwordRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    // validate first name
    if (!inputs.firstName) {
        errors.firstName = 'First Name is required';
    }

    // validate last name
    if (!inputs.lastName) {
        errors.lastName = 'Last Name is required';
    }

    // validate email address 
    if (!inputs.emailAddress) {
        errors.emailAddress = 'Email Address is required';
    } else {
        if (!emailRE.test(inputs.emailAddress)) {
            errors.emailAddress = 'Enter a valid email address';
        }
    }

    // validate password
    if (!inputs.password) {
        errors.password = 'Password is required';
    } else {
        if (!passwordRE.test(inputs.password)) {
            errors.password = 'Password must be 8 characters long and contain at least 1 digit'
        }
    }

    return errors;
}

export default validate;