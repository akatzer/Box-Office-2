import React, { Component } from "react";
import MovieCard from "./components/MovieCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Search from "./components/searchBox/searchBox";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./App.css";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Login from './components/auth/Login';
import searchBox from "./components/searchBox/searchBox";

function onAuthRequired({history}) {
    history.push('/login')
}


class App extends Component {
    
    render() {
        return (
            <Router>
            <Security issuer='https://dev-951381.oktapreview.com/oauth2/default'
            client_id='0oaj31n907IIAyjL50h7'
            redirect_uri={window.location.origin + '/implicit/callback'}
            onAuthRequired={onAuthRequired} >
            <SecureRoute path="/" exact={true} component={Wrapper} />
            <Route path='/login' render={() => <Login baseUrl='https://dev-951381.oktapreview.com' />} />
          <Route path='/implicit/callback' component={ImplicitCallback} />

            </Security>
            </Router>

            
            
        );
    }
}

export default App;