import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLoadingButton from '../MuiLoadingButton';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../store/actions/user';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import useForm from '../../../hooks/useForm';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    input: {
        marginTop: theme.spacing(2)
    }
}))

export default function MuiChangeTheme() {
    const loading = useSelector(state => state.loading);
    const userId = useSelector(state => state.auth.user._id);
    const theme = useSelector(state => state.auth.user.theme);

    const dispatch = useDispatch();
    const classes = useStyles();

    const submit = () => {
        let theme = {
            theme: inputs
        }
        let p = dispatch(updateUser(`/api/users/${userId}`, theme));
        p
            .then(() => console.log("updated theme"))
            .catch(err => console.log(err))
    }

    const { handleSubmit, handleInputChange, inputs, errors, setInputs } = useForm(submit, () => {
        let errors = {};
        return errors;
    });

    useEffect(() => {
        setInputs(theme);
    }, [theme, setInputs])

    const options = ['Blue', 'Purple', 'Pink', 'Green', 'Red'].map(option => {
        return (<MenuItem key={option.toLowerCase()} value={option.toLowerCase()}>
            {option}
        </MenuItem>)
    })

    const themes = ['Light', 'Dark'].map(theme => {
        return (
            <FormControlLabel
                value={theme.toLowerCase()}
                key={theme.toLowerCase()}
                control={<Radio color="primary" />}
                label={theme}
                labelPlacement="start"
            />
        )
    })

    return (
        <>
            <Typography variant="h5" component="h2" color="textSecondary">Change Theme</Typography>
            <TextField
                variant="outlined"
                className={classes.input}
                select
                fullWidth
                name="color"
                id="color"
                label="Primary Color"
                onChange={handleInputChange}
                value={inputs.color || 'blue'}
            >
                {options}
            </TextField>
            <FormControl component="fieldset" className={classes.input}>
                <FormLabel component="legend">Theme</FormLabel>
                <RadioGroup row name="lightDark" value={inputs.lightDark || 'light'} onChange={handleInputChange}>
                    {themes}
                </RadioGroup>
            </FormControl>
            <MuiLoadingButton
                className={classes.input}
                variant="contained"
                color="primary"
                fullWidth
                handleClick={handleSubmit}
                loading={loading}
                label="Update Theme"
            />
        </>
    )

}