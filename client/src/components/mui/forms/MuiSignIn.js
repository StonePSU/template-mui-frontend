import React from 'react';
import useForm from "../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../store/actions/auth";
import validate from "../../../utils/FormValidation";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from 'react-router-dom';
import MuiLoadingButton from '../MuiLoadingButton';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    submit: {
        marginTop: theme.spacing(3, 0, 2),
    },
    avatar: {
        marginBottom: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    link: {
        marginTop: theme.spacing(1),
    }
}))

export default function Login({ history, signup }) {
    const { handleInputChange, handleSubmit, inputs, errors } = useForm(submit, validate);
    const dispatch = useDispatch();
    let loading = useSelector(state => state.loading);
    const classes = useStyles();

    function submit() {
        const path = '/api/auth/login';


        let promise = dispatch(registerUser(path, inputs));
        promise
            .then((res) => {
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Container component="main" maxWidth='xs'>
            <div className={classes.paper}>
                <Avatar variant="rounded" className={classes.avatar} width="150px" height="150px">
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form>
                    <TextField
                        name="emailAddress"
                        margin="normal"
                        variant="outlined"
                        required label="Email"
                        type="email"
                        id="emailAddress"
                        disabled={loading}
                        autoFocus
                        fullWidth
                        value={inputs.emailAddress || ''}
                        onChange={handleInputChange}
                        helperText={errors.emailAddress}
                        error={Boolean(errors.emailAddress)}
                    />
                    <TextField
                        name="password"
                        margin="normal"
                        variant="outlined"
                        required
                        label="Password"
                        type="password"
                        id="password"
                        disabled={loading}
                        fullWidth
                        value={inputs.password || ''}
                        onChange={handleInputChange}
                        helperText={errors.password}
                        error={Boolean(errors.password)}
                    />
                    <MuiLoadingButton
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                        handleClick={handleSubmit}
                        className={classes.submit}
                        loading={loading}
                        label="Login"
                    />
                </form>
                <Link
                    component={RouterLink}
                    to="/signup"
                    variant="body2"
                    className={classes.link}
                >
                    Don't have an account, Sign Up
                </Link>
            </div>
            {/* <MuiErrorSnackbar isError={Boolean(error)} errorMsg={error} handleExit={() => { dispatch(setPageError(null)) }} /> */}
        </Container>
    )

}