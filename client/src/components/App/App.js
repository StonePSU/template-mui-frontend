import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import configureStore from "../../store";
import { Provider } from 'react-redux';
import MuiSignIn from "../mui/forms/MuiSignIn.js";
import MuiSignup from '../mui/forms/MuiSignup.js';
import MuiErrorSnackbar from "../mui/MuiErrorSnackbar";
import MuiResponsiveDrawer from "../mui/MuiResponsiveDrawer";
import { PersistGate } from 'redux-persist/integration/react'
import MuiTheme from '../mui/MuiTheme';

import { purple } from '@material-ui/core/colors';

const { store, persistor } = configureStore();

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MuiTheme>
          <Router>
            <Switch>
              <Route path="/signup" component={MuiSignup} />
              <Route path="/login" component={MuiSignIn} />
              <Route path="/" component={MuiResponsiveDrawer} />
              <Route render={() => (<div>Not Found</div>)} />
            </Switch>
          </Router>
          <MuiErrorSnackbar />
        </MuiTheme>
      </PersistGate>
    </Provider >
  );
}

export default App;
