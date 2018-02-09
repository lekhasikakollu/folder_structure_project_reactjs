const InitialState = {

    viewControl: {
        loading: false,
        selectedChapterId: "",
        selectedExerciseId: "",
        currentMainView: "chapters",
        currentNavView: "",
        currentDisplay : "",
        currentFolder : {},

        //aync status for loading chapters
        // isChaptersLoading: false,
        // isChaptersSuccess: false,

        // //async status for loading Exercises
        // isExercisesLoading: false,
        // isExercisesSuccess: false,
        signUpProblem: {}/*,
        isLoggedIn:null*/
    },
    chapterControls: {
        chapters: []
        // ,
        // //async status for loading selected Exercise
        // isChapterLoading: false,
        // isChapterSuccess: false,
        // chaptersErrorMessage: "Did not called for Exercise"
    },
    exercises: {

        currentExc: '',
        excercisesList: [
        ]
    },
    exerciseControls: {
        exercise: {},
        result: [],
        outputView:"",
        //showResult: false
        // isExerciseLoading: false,
        // isExerciseSuccess: false,
        // exerciseErrorMessage: "Did not called for Exercise",

        // isResultLoading:false,
        // isResultReceived:false,
        // resultMsg:"",


    }
};
export default InitialState