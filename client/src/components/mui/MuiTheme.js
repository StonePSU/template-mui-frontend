import React from 'react';
import { useSelector } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const colors = Object.freeze({
    blue: {
        light: "#4dabf5",
        main: "#2196f3",
        dark: "#1769aa",
        contrastText: "#fff"
    },
    purple: {
        light: "#af52bf",
        main: "#9c72b0",
        dark: "#6d1b7b",
        contrastText: "#fff"
    },
    pink: {
        light: "#ed4b82",
        main: "#e91e63",
        dark: "#a31545"
    },
    green: {
        light: "#6fbf73",
        main: "#4caf50",
        dark: "#357a38",
        contrastText: "#fff"
    },
    red: {
        light: "#f6685e",
        main: "#f44336",
        dark: "#aa2e25",
        contrastText: "#fff"
    },
    black: {
        light: "#484848",
        main: "#212121",
        dark: "#000000",
        contrastText: "#fff"
    },
    orange: {
        main: "#ff9800",
        light: "#ffc947",
        dark: "#c66900",
        contrastText: "#000"
    }
})

const defaultTheme = {
    primaryColor: 'blue',
    secondaryColor: 'pink',
    lightDark: 'light'
};

function createPalette(primary, secondary, type) {
    let obj = {};
    obj = {
        primary,
        secondary
    };
    obj.type = type;
    return obj;
}

export default function MuiTheme(props) {
    const user = useSelector(state => state.auth.user);
    let userTheme;

    if (user && user.theme) {
        userTheme = user.theme;
    } else {
        userTheme = defaultTheme;
    }

    const { primaryColor, secondaryColor, lightDark } = userTheme;
    const palette = createPalette(colors[primaryColor], colors[secondaryColor], lightDark);
    const theme = createMuiTheme({
        palette
    });
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}