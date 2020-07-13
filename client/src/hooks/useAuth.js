import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function useAuth({ history }) {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    useEffect(() => {
        if (!isAuthenticated) {
            history.push('/login')
        }
    }, [isAuthenticated, history])
    return isAuthenticated;

}