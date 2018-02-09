export default function NavigationReducer(state, action) {
    if (typeof state === 'undefined') {
        return Object.assign({}, state);
    }
    switch (action.type) {
        case 'SHOW_EXERCISE':
            //console.log('yayy in show-excercise case');
            let showExerciseState = JSON.parse(JSON.stringify(state));
            showExerciseState.currentMainView = "exercise";
            return showExerciseState;

        case 'SHOW_EXERCISES':
            let showExercisesState = JSON.parse(JSON.stringify(state));
            showExercisesState.currentMainView = "exercises";
            return showExercisesState;

        case 'SHOW_CHAPTERS':
            let showChaptersState = JSON.parse(JSON.stringify(state));
            showChaptersState.currentMainView = "chapters";
            return showChaptersState;

        case 'UPDATE_CURRENT_EXCERCISE':
            let updateExercisesState = JSON.parse(JSON.stringify(state));
            updateExercisesState.selectedExerciseId = action.payload;
            return updateExercisesState;
            
        case "SHOW_LOGIN":
            let showLoginState = JSON.parse(JSON.stringify(state));
            showLoginState.currentMainView = "logIn";
            return showLoginState;
           
            case "SHOW_DETAILS":
            let showdetailsState = JSON.parse(JSON.stringify(state));
            showdetailsState.currentDisplay = "details";
            return showdetailsState;

            case "SHOW_DIRECTORY":
            let showdirectoryState = JSON.parse(JSON.stringify(state));
            showdirectoryState.currentDisplay = "directory";
            return showdirectoryState;


        case "SHOW_SIGNUP":
            let showSignUpState = JSON.parse(JSON.stringify(state));
            showSignUpState.currentMainView = "signup";
            return showSignUpState;
        case 'SIGNING_UP':
            let signingUpState = JSON.parse(JSON.stringify(state));
            signingUpState.loading = true;
            return signingUpState;
        case 'SIGNUP_SUCCESS':
            let signupSuccessState = JSON.parse(JSON.stringify(state));
            signupSuccessState.loading = false;
            signupSuccessState.signUpProblem = {};
            signupSuccessState.currentMainView = "chapters";
            return signupSuccessState;
        case 'SIGNUP_FAILED':
            let signUpFailedState = JSON.parse(JSON.stringify(state));
            signUpFailedState.loading = false;
            signUpFailedState.signUpProblem = action.payload;
            return signUpFailedState;

        case 'LOGGING_IN':
            let loggingInState = JSON.parse(JSON.stringify(state));
            loggingInState.loading = true;
            return loggingInState;
        case 'LOGIN_SUCCESS':
            let logInSuccessState = JSON.parse(JSON.stringify(state));
            logInSuccessState.loading = false;
            if (action.payload === true) {
                logInSuccessState.isLoggedIn = true;
                logInSuccessState.currentMainView = "chapters";
            } else {
                logInSuccessState.isLoggedIn = false;
            }
            return logInSuccessState;

        case 'LOGOUT_SUCCESS':
            let logInFailedState = JSON.parse(JSON.stringify(state));
            logInFailedState.isLoggedIn = false;
            return logInFailedState;
        case 'HOME':
            let homeState=JSON.parse(JSON.stringify(state));
            homeState.currentMainView="chapters";
            return homeState;

            case 'TOGGLE_CHAPTER_DISPLAY':
            console.log('nav red , -> '+action.data.chId);
            let newCurrentFolder = JSON.parse(JSON.stringify(state));
            newCurrentFolder.currentFolder = action.data;
            return newCurrentFolder;
            
        default:
            return Object.assign({}, state);
    }
}