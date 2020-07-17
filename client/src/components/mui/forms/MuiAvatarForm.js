import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { uploadProfileImage } from "../../../store/actions/user";
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    title: {
        marginBottom: theme.spacing(2),
        textAlign: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(2),
    },
    button: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    }

}));

function MuiAvatarForm() {
    const profileImageURL = useSelector(state => state.auth.user.profileImageURL);
    const userId = useSelector(state => state.auth.user._id);
    const [disabled, setDisabled] = useState(true);
    const [imageURL, setImageURL] = useState("");
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (event.currentTarget.value !== null) {
            setDisabled(false);
        } else {
            setDisabled(true)
        }

        setImageURL(event.target.files[0]);
    }

    const handleUpload = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("avatar", imageURL, imageURL.name);
        dispatch(uploadProfileImage(`/api/users/${userId}/profileImage`, formData));

    }

    return (
        <>
            <Container maxWidth="xs">
                <Typography variant="h5" component="h2" color="textSecondary" className={classes.title}>
                    Update Profile Image
                </Typography>
                <Avatar src={profileImageURL} className={classes.avatar} />
                <TextField
                    id="avatar"
                    name="avatar"
                    variant="outlined"
                    type="file"
                    fullWidth
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                    disabled={disabled}
                    type="submit"
                    fullWidth
                    onClick={handleUpload}
                >
                    Upload
            </Button>
            </Container>
        </>
    )
}

export default MuiAvatarForm;