import axios from "axios";

const ChapterActions = {};
ChapterActions.displayChapterId = function (chapId ,type , isToggled) {
    return function (dispatch, state) {
        console.log('from chapter actions : id received : ' + chapId);
        console.log("displayChapterId dispatch in ChapterActions", isToggled);

        console.log('type selected : '+type);
        dispatch({ type: 'TOGGLE_CHAPTER_DISPLAY2' ,data :{chId : chapId,isToggled:isToggled}});
        dispatch({ type: 'TOGGLE_CHAPTER_DISPLAY' ,data :{chId : chapId,isToggled:isToggled}});
        (type == 'show_details') ? dispatch({ type: 'SHOW_DETAILS' }) : dispatch({ type: 'SHOW_DIRECTORY' });
        axios.get('/getExerciseList?id=' + chapId)
            .then(function (response) {
                console.log("getExcerciseList : response=", response.data.subFolders);
                dispatch({ type: 'EXERCISES_LIST_SUCCESS', payload: response.data.subFolders, data: response.data.name });
                dispatch({ type: 'SHOW_EXERCISES' });
            })
            .catch(function (err) {
                console.log("getExcerciseList :error response=", err);
                //dispatch({ type: 'EXERCISES_LIST_FAIL', payload: "Some error has happened. We are Working on it." });

            });
    };
};

ChapterActions.displayFullEcercise = function (excId, method) {
    var excIdToDisplay = excId;
    if (method === 'current') {
        excIdToDisplay = excId;
    } else if (method === 'prev') {
        excIdToDisplay = excId - 1;
    } else if (method === 'next') excIdToDisplay = excId + 1;


    return function (dispatch, state) {
        console.log('from chapter actions : id received : ' + excIdToDisplay);
        console.log("ChapterActions.displayFullEcercise dispatch-> ", dispatch);
        dispatch({ type: 'SHOW_EXERCISE' });
        axios.get('/getExercise?id=' + excIdToDisplay)
            .then(function (response) {
                console.log("Checking response in ChapterActions.displayFullExcercise : response is -> ", response);
                dispatch({ type: 'EXERCISE_SUCCESS', payload: response.data });
                dispatch({ type: 'UPDATE_CURRENT_EXCERCISE', payload: excIdToDisplay });
            })
            .catch(function (err) {
                dispatch({ type: 'EXERCISE_FAIL', payload: "Some error has happened. We are Working on it." });
            });
    };
};

export default ChapterActions;