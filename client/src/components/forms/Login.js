import React, { useState } from 'react';
import useForm from "../../hooks/useForm";
import "./Forms.css";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { registerUser } from "../../store/actions/auth";
import Error from "../Error";
import Loading from "../Loading/Loading";
import validate from "../../utils/LoginValidation";
import { CSSTransition } from 'react-transition-group';
import CardTitle from "../Card/CardTitle";

function Login({ history, signup }) {
    const { handleInputChange, handleSubmit, inputs, errors } = useForm(submit, validate);
    const dispatch = useDispatch();
    let error = useSelector(state => state.pageError);
    let loading = useSelector(state => state.loading);
    // let isAuthenticated = useSelector(state => state.isAuthenticated);

    function submit() {
        const path = '/api/auth/login';


        let promise = dispatch(registerUser(path, inputs));
        promise
            .then((res) => {
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    const cardTitle = "Login"

    // if (!isAuthenticated) {
    //     return (<Redirect to="/" />)
    // }

    return (
        <main className="page">
            <Loading loading={loading} />
            <section>
                <div className='flex-row-center'>
                    <Card classNames='medium'>
                        <CardTitle>{cardTitle}</CardTitle>
                        <Error msg={error} />
                        <form onSubmit={handleSubmit} className="single-column-form">
                            {(signup) ?
                                (
                                    <React.Fragment>
                                        <input
                                            className={errors.firstName ? "is-danger" : ""}
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            onChange={handleInputChange}
                                            value={inputs.firstName || ''}
                                        />
                                        <div className="field-error">{errors.firstName || ''}</div>
                                        <input
                                            className={errors.lastName ? "is-danger" : ""}
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            onChange={handleInputChange}
                                            value={inputs.lastName || ''}
                                        />
                                        <div className='field-error'>{errors.lastName || ''}</div>
                                        <input
                                            className={errors.phoneNumber ? "is-danger" : ""}
                                            type="phone"
                                            name="phoneNumber"
                                            placeholder="Enter your preferred phone number"
                                            onChange={handleInputChange}
                                            value={inputs.phoneNumber || ''}
                                        />
                                        <div className='field-error'>{errors.phoneNumber || ''}</div>
                                    </React.Fragment>
                                ) : ""}
                            <input
                                className={errors.emailAddress ? "is-danger" : ""}
                                type="text"
                                name="emailAddress"
                                placeholder="Enter your email"
                                onChange={handleInputChange}
                                value={inputs.emailAddress || ''}
                            />
                            <div className='field-error'>{errors.emailAddress || ''}</div>
                            <input
                                className={errors.password ? "is-danger" : ""}
                                type="password"
                                name="password"
                                placeholder="Create your password"
                                onChange={handleInputChange}
                                value={inputs.password || ''} />
                            <div className='field-error'>{errors.password || ''}</div>
                            <button type="submit">Log In</button>
                        </form>
                    </Card>
                </div>
            </section>
        </main >
    )

}

export default Login;