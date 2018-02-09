
export default function exercisesReducer(state, action) {
    if (typeof state === 'undefined') {
        return Object.assign({}, state);
    }
    let newExcercisesState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "EXERCISES_LIST_SUCCESS":
        console.log('exc reducer');
        newExcercisesState.currentExc=action.data;
        newExcercisesState.excercisesList = action.payload;
        console.log('showing updated state from excredu'+JSON.stringify(newExcercisesState))
            return newExcercisesState;
        default:
            return Object.assign({}, state);
    }
}
