import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import validate from '../../../utils/UpdateUserValidation';
import useForm from '../../../hooks/useForm';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../../store/actions/user';
import MuiLoadingButton from '../MuiLoadingButton';

export default function MuiUpdateProfile() {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);

    const submit = () => {
        let p = dispatch(updateUser(`/api/users/${user._id}`, inputs))
        p
            .then(user => {
                console.log('updated user successfully')
            })
            .catch(err => {
                console.warn(err);
            })
    }

    const { handleSubmit, handleInputChange, inputs, errors, setInputs } = useForm(submit, validate);

    useEffect(() => {
        setInputs(user);
    }, [user])


    return (
        <>
            <Typography variant="h5" component="h2" color="textSecondary">Update My Information</Typography>
            <TextField
                margin="normal"
                id="firstName"
                name="firstName"
                type="text"
                required
                fullWidth
                label="First Name"
                variant="outlined"
                disabled={loading}
                onChange={handleInputChange}
                value={inputs.firstName || ''}
                helperText={errors.firstName}
                error={Boolean(errors.firstName)}
            />
            <TextField
                margin="normal"
                id="lastName"
                name="lastName"
                type="text"
                required
                fullWidth
                label="Last Name"
                variant="outlined"
                disabled={loading}
                onChange={handleInputChange}
                value={inputs.lastName || ''}
                helperText={errors.lastName}
                error={Boolean(errors.lastName)}
            />
            <TextField
                margin="normal"
                id="emailAddress"
                name="emailAddress"
                type="email"
                required
                fullWidth
                label="Email Address"
                variant="outlined"
                disabled={loading}
                onChange={handleInputChange}
                value={inputs.emailAddress || ''}
                helperText={errors.emailAddress}
                error={Boolean(errors.emailAddress)}
            />
            <TextField
                margin="normal"
                id="phoneNumber"
                name="phoneNumber"
                type="phone"
                fullWidth
                label="Phone Number"
                variant="outlined"
                disabled={loading}
                onChange={handleInputChange}
                value={inputs.phoneNumber || ''}
                helperText={errors.phoneNumber}
                error={Boolean(errors.phoneNumber)}
            />
            <MuiLoadingButton
                variant="contained"
                color="primary"
                fullWidth
                handleClick={handleSubmit}
                loading={loading}
                label="Update Profile"
            />
        </>
    )

}