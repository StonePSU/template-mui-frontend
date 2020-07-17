import React from 'react';
import useAuth from '../../hooks/useAuth';
import MuiResponsiveDrawer from './MuiResponsiveDrawer.js';

export default function MuiHome(props) {
    return (useAuth(props) && <MuiResponsiveDrawer {...props} />)
}