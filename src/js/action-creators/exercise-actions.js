import axios from "axios";

const ExerciseActions = {};
/*

ExerciseActions.getExercise = function () {
    return function (dispatch, state) {
        console.log("dispatch in ContactActions", dispatch);
        dispatch({ type: 'EXERCISE_LOADING' });
        axios.get('/getExercise')
            .then(function (response) {
                console.log("response=", response);
                dispatch({ type: 'EXERCISE_SUCCESS', payload: response.data });
            })
            .catch(function (err) {
                dispatch({ type: 'EXERCISE_FAIL', payload: "Some error has happened. We are Working on it." });

            });
    };
};
*/

ExerciseActions.getAllChapters = function () {
    return function (dispatch, state) {
        console.log("dispatch in getAllChapters", dispatch);
        dispatch({ type: 'CHAPTERS_LOADING' });
        axios.get('/getChapters')
            .then(function (response) {
                console.log("response=", response);
                dispatch({ type: 'CHAPTERS_SUCCESS', payload: response.data.chapters });
                axios.get('/getCompletionData')
                .then(function(response){
                    console.log('getAllChapter , completion status array : '+response.data);
                })
            })
            .catch(function (err) {
                dispatch({ type: 'CHAPTERS_FAIL', payload: "Some error has happened IN getting chapters list. We are Working on it." });

            });
    };
};

ExerciseActions.sendCode = function (code,excId) {
    return function (dispatch, state) {
        console.log("Code received in the action creator-->", { "code": code });
        dispatch({ type: 'SENDING_CODE' });
        axios.post('/sendCode', { "code": code, "excId" : excId })
            .then(function (response) {
                dispatch({type:'SAVING_RESULT_STATUS' , payload : response.data.isCompleted.toString()}); 
                dispatch({ type: 'RECEIVED_RESULT', payload: response.data.result });
                console.log('Response received in Send Code action-->', response);
                console.log('completion status received : '+response.data.isCompleted);
                  
            })
            .catch(function (error) {
                dispatch({ type: 'RECEIVED_RESULT', payload: error });
                // console.log('Error oocured in Send Code action-->', error);
            })
    }
}
export default ExerciseActions;
