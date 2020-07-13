const validate = (inputs, signup) => {
    let errors = {};
    let emailRE = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

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
    }

    return errors;
}

export default validate;