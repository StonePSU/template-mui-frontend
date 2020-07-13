import React from 'react';
import useForm from '../../../hooks/useForm';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { changePassword } from "../../../store/actions/user";
import { useDispatch, useSelector } from 'react-redux';
import validate from '../../../utils/ChangePasswordValidation.js';
import MuiLoadingButton from '../MuiLoadingButton';

export default function MuiChangePassword({ history }) {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.user._id);
    const loading = useSelector(state => state.loading);

    const submit = () => {
        let p = dispatch(changePassword(`/api/users/${userId}/changePassword`, inputs));
        p.then(() => {
            // history.push('/');
            setInputs({});
        })
    }

    const { handleSubmit, handleInputChange, inputs, errors, setInputs } = useForm(submit, validate)

    return (
        <>
            <Typography variant="h5" component="h2" color="textSecondary">Change My Password</Typography>
            <TextField
                margin="normal"
                id="originalPassword"
                name="originalPassword"
                type="password"
                variant="outlined"
                onChange={handleInputChange}
                value={inputs.originalPassword || ''}
                disabled={loading}
                fullWidth
                label="Original Password"
                required={true}
                helperText={errors.originalPassword}
                error={Boolean(errors.originalPassword)}
            />
            <TextField
                margin="normal"
                id="password"
                name="password"
                type="password"
                variant="outlined"
                onChange={handleInputChange}
                value={inputs.password || ''}
                disabled={loading}
                fullWidth
                label="New Password"
                required={true}
                helperText={errors.password}
                error={Boolean(errors.password)}
            />
            <MuiLoadingButton
                variant="contained"
                color="primary"
                fullWidth
                handleClick={handleSubmit}
                loading={loading}
                label="Change Password"
            />
        </>

    )
}