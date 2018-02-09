import INITIAL_STATE from './intial-state';

export default function exerciseReducer(state, action) {
    /*exerciseControls: {
        exercise: {},
        //async status for loading selected Exercise
        isExerciseLoading: false,
        isExerciseSuccess: false,
        exerciseErrorMessage: "Did not called for Exercise",
    }*/
    if (typeof state === 'undefined') {
        return Object.assign({}, state);
    }
    switch (action.type) {
        case 'EXERCISE_LOADING':
            let exerciseLoadingState = JSON.parse(JSON.stringify(state));
            exerciseLoadingState.isExerciseLoading = true;
            exerciseLoadingState.isExerciseSuccess = false;
            exerciseLoadingState.exercise = {};
            exerciseLoadingState.exerciseErrorMessage = "";
            return exerciseLoadingState;

        case 'EXERCISE_SUCCESS':
            let exerciseSuccessState = JSON.parse(JSON.stringify(state));
            exerciseSuccessState = INITIAL_STATE.exerciseControls;
            console.log(exerciseSuccessState);
            exerciseSuccessState.isExerciseLoading = false;
            exerciseSuccessState.isExerciseSuccess = true;
            exerciseSuccessState.exercise = action.payload.exercise;
            exerciseSuccessState.exerciseErrorMessage = "";
            return exerciseSuccessState;

        case 'EXERCISE_FAIL':
            let exerciseFailState = JSON.parse(JSON.stringify(state));
            exerciseFailState.isExerciseLoading = false;
            exerciseFailState.isExerciseSuccess = false;
            exerciseFailState.resultMsg = action.payload;
            exerciseFailState.exercise = {};
            return exerciseFailState;

        case 'SENDING_CODE':
            let sendingCodeState = JSON.parse(JSON.stringify(state));
            sendingCodeState.isResultLoading = true;
            sendingCodeState.isResultReceived = false;
            sendingCodeState.resultMsg = "....Loading....";
            sendingCodeState.outputView = "result";
            return sendingCodeState;

        case 'RECEIVED_RESULT':
            let receivedResultState = JSON.parse(JSON.stringify(state));
            receivedResultState.isResultLoading = false;
            receivedResultState.isResultReceived = true;
            receivedResultState.resultMsg = "Here are the results of test cases tested on your code.";
            receivedResultState.result = action.payload;
            receivedResultState.outputView = "result";
            return receivedResultState;
        case 'RESULT_FAILED':
            let resultFailedState = JSON.parse(JSON.stringify(state));
            resultFailedState.isResultLoading = false;
            resultFailedState.isResultReceived = false;
            resultFailedState.resultMsg = action.payload;
            resultFailedState.result = action.payload;
            resultFailedState.outputView = "result";
            return resultFailedState;

        case 'SHOW_SOLUTION':
            let showResultState = JSON.parse(JSON.stringify(state));
            showResultState.outputView = "solution";
            showResultState.resultMsg = "";
            return showResultState;
        case 'SAVING_RESULT_STATUS':
            let setStatus = JSON.parse(JSON.stringify(state));
            setStatus.exercise.isCompleted = action.payload;
            console.log('from save result : update is '+JSON.stringify(setStatus));
            return setStatus;

        default:
            return Object.assign({}, state);
    }
}