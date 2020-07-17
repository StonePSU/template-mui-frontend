import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    }
}))

export default function MuiLoadingButton({ label, handleClick, color, variant, loading, ...props }) {

    const classes = useStyles();
    return (
        <Button
            variant={variant}
            className={classes.button}
            fullWidth
            onClick={handleClick}
            {...props}
        >
            {loading ? <CircularProgress color='inherit' size={25} /> : label}
        </Button>
    )
}