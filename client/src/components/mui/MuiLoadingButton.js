import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function MuiLoadingButton({ label, handleClick, color, variant, loading, ...props }) {

    return (
        <Button
            variant={variant}
            color={color}
            fullWidth
            onClick={handleClick}
            {...props}
        >
            {loading ? <CircularProgress color='inherit' size={25} /> : label}
        </Button>
    )
}