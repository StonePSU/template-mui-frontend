import React from 'react';
import useForm from "../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../store/actions/auth";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import validate from "../../../utils/CreateAccountValidation";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import MuiLoadingButton from '../MuiLoadingButton';
import Fade from '@material-ui/core/Fade';

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

export default function Signup({ history, signup }) {
    const { handleInputChange, handleSubmit, inputs, errors } = useForm(submit, validate);
    const dispatch = useDispatch();
    let loading = useSelector(state => state.loading);
    // let isAuthenticated = useSelector(state => state.isAuthenticated);
    const classes = useStyles();

    function submit() {
        const path = '/api/auth/signup';


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
        <Fade in={true} timeout={1000}>
            <Container component="main" maxWidth="xs" >
                <div className={classes.paper}>
                    <Avatar variant="rounded" className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create an account
                </Typography>
                    <Grid
                        container
                        directon="row"
                        spacing={1}
                    >
                        <Grid item xs={12} sm={6} >
                            <TextField
                                variant="outlined"
                                id="firstName"
                                name="firstName"
                                type="text"
                                required
                                label="First Name"
                                margin="normal"
                                fullWidth
                                onChange={handleInputChange}
                                autoFocus
                                value={inputs.firstName || ''}
                                helperText={errors.firstName}
                                error={Boolean(errors.firstName)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                id="lastName"
                                name="lastName"
                                type="text"
                                required
                                label="Last Name"
                                margin="normal"
                                fullWidth
                                onChange={handleInputChange}
                                value={inputs.lastName || ''}
                                helperText={errors.lastName}
                                error={Boolean(errors.lastName)}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        variant="outlined"
                        id="phoneNumber"
                        name="phoneNumber"
                        type="phone"
                        label="Phone"
                        margin="normal"
                        fullWidth
                        onChange={handleInputChange}
                        value={inputs.phoneNumber || ''}
                        helperText={errors.phoneNumber}
                        error={Boolean(errors.phoneNumber)}
                    />
                    <TextField
                        variant="outlined"
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        required
                        label="Email"
                        margin="normal"
                        fullWidth
                        onChange={handleInputChange}
                        value={inputs.emailAddress || ''}
                        helperText={errors.emailAddress}
                        error={Boolean(errors.emailAddress)}
                    />
                    <TextField
                        variant="outlined"
                        id="password"
                        name="password"
                        type="password"
                        required
                        label="Password"
                        margin="normal"
                        fullWidth
                        onChange={handleInputChange}
                        value={inputs.password || ''}
                        helperText={errors.password}
                        error={Boolean(errors.password)}
                    />
                    <MuiLoadingButton
                        variant="contained"
                        color="primary"
                        fullWidth
                        handleClick={handleSubmit}
                        loading={loading}
                        label="Sign Up"
                    />
                    <Link variant="body2" className={classes.link} component={RouterLink} to="/login">Already have an account? Log in</Link>
                </div>
                {/* <MuiErrorSnackbar isError={Boolean(error)} errorMsg={error} handleExit={() => { dispatch(setPageError(null)) }} /> */}
            </Container>
        </Fade>
    )


}