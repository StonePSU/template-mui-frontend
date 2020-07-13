import { combineReducers } from 'redux';
import auth from './auth';
import pageError from "./error";
import loading from "./loading";

const rootReducer = combineReducers({ auth, pageError, loading });

export default rootReducer;