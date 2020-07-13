const validate = (inputs, signup) => {
    let errors = {};
    let emailRE = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

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

    return errors;
}

export default validate;