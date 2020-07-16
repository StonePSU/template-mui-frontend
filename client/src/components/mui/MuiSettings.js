import React from 'react';
import MuiAvatarForm from './forms/MuiAvatarForm';
import MuiChangePassword from './forms/MuiChangePassword';
import MuiUpdateProfile from './forms/MuiUpdateProfile';
import MuiChangeTheme from './forms/MuiChangeTheme';
import useAuth from '../../hooks/useAuth';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left'
    },
    grid: {
        paddingRight: 10
    }
}))

function MuiSettings(props) {
    const classes = useStyles();

    return useAuth(props) && (
        <Fade in={true} timeout={500} direction='up'>
            <Grid container spacing={5} justify="center" direction="row" className={classes.grid}>
                <Grid item sm={12}>
                    <Paper className={classes.paper} elevation={2}>
                        <MuiAvatarForm />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={2} className={classes.paper}>
                        <MuiChangePassword {...props} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={2}>
                        <MuiChangeTheme />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper} elevation={2}>
                        <MuiUpdateProfile />
                    </Paper>
                </Grid>
            </Grid>
        </Fade>
    )
}

export default MuiSettings;