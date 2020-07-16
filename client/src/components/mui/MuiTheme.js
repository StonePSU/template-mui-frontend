import React from 'react';
import { useSelector } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const colors = Object.freeze({
    blue: {
        primary: {
            light: "#4dabf5",
            main: "#2196f3",
            dark: "#1769aa",
            contrastText: "#fff"
        }
    },
    purple: {
        primary: {
            light: "#af52bf",
            main: "#9c72b0",
            dark: "#6d1b7b",
            contrastText: "#fff"
        }
    },
    pink: {
        primary: {
            light: "#ed4b82",
            main: "#e91e63",
            dark: "#a31545"
        }
    },
    green: {
        primary: {
            light: "#6fbf73",
            main: "#4caf50",
            dark: "#357a38",
            contrastText: "#fff"
        }
    },
    red: {
        primary: {
            light: "#f6685e",
            main: "#f44336",
            dark: "#aa2e25",
            contrastText: "#fff"
        }
    }
})

function createPalette(color, type) {
    let obj = {};
    obj = { ...color };
    obj.type = type;
    return obj;
}

export default function MuiTheme(props) {
    const { color, lightDark } = useSelector(state => state.auth.user.theme || { color: 'indigo', lightDark: 'light' });
    const palette = createPalette(colors[color], lightDark);
    const theme = createMuiTheme({
        palette
    });
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}