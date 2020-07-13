import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from 'react-redux';
import { setPageError } from '../../store/actions/error';

const useStyles = makeStyles((theme) => ({
    errors: {
        textAlign: "center"
    }
}))


// const MuiErrorSnackbar = ({ isError, errorMsg, handleExit }) => {
const MuiErrorSnackbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const error = useSelector(state => state.pageError);
    const isError = Boolean(error);
    const dispatch = useDispatch();

    useEffect(() => {
        setOpen(isError);
    }, [isError])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }

    const handleExit = () => {
        dispatch(setPageError(null))
    }

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={open}
            onExit={handleExit}
            autoHideDuration={6000}
            onClose={handleClose}
            message={error}
            className={classes.errors}
            action={
                <React.Fragment>
                    <Button color="secondary" size="small" onClick={handleClose}>
                    </Button>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
        />
    )
}

export default MuiErrorSnackbar;