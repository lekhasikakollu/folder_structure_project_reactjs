import axios from "axios";

const LogActions = {};

LogActions.showLogIn = function () {
    console.log("showLogIn is clicked. Changing main view to login.");
    return ({type: 'SHOW_LOGIN'});
};
LogActions.showSignUp = function () {

    console.log("showSignUp is clicked. Changing main view to login.");
    return ({type: 'SHOW_SIGNUP'});
};
LogActions.signUp = function (newUser) {

    return function (dispatch, state) {
        dispatch({type: 'SIGNING_UP'});
        axios.post('/addUser', {"newUser": newUser})
            .then(function (response) {
                console.log("Response received in signUp() action", response);
                if (response.data.isRegistrationSuccess) {
                    dispatch({type: 'SIGNUP_SUCCESS'});
                }
                else {
                    dispatch({type: 'SIGNUP_FAILED', payload: response.data.userValidation});
                }
            })
            .catch(function (error) {
                console.log('Error oocured in SignUP action-->', error);
                dispatch({type: 'SIGNUP_ERROR'});
            });
    }
};

LogActions.logIn = function (credentials) {
    console.log("Arguments received in logIn action:", arguments);
    return function (dispatch, state) {
        dispatch({type: 'LOGGING_IN'});
        axios.post('/login', {credentials})
            .then(function (response) {
                console.log("Response received in logIn() action", response);

                dispatch({type: 'LOGIN_SUCCESS', payload: response.data});

            })
            .catch(function (error) {
                console.log('Error oocured in LogIn action-->', error);
                dispatch({type: 'LOGIN_ERROR'});
            });
    }
};


LogActions.logOut = function (credentials) {
    console.log("Arguments received in logOut action:", arguments);
    return function (dispatch, state) {
        dispatch({type: 'LOGGING_OUT'});
        axios.get('/logout', {credentials})
            .then(function (response) {
                console.log("Response received in logOut() action", response);
                dispatch({type: 'LOGOUT_SUCCESS'});

            })
            .catch(function (error) {
                console.log('Error oocured in LogOut action-->', error);
                dispatch({type: 'LOGOUT_ERROR'});
            });
    }
};

export default LogActions;