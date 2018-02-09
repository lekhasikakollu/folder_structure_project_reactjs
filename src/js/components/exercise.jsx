import React from 'react';
import { connect } from 'react-redux';
import TestCases from './test-cases.jsx';

import ExerciseActions from '../action-creators/exercise-actions.js'
import ChapterActions from '../action-creators/chapter-actions.js';
class Exercise extends React.Component {

    constructor(props) {
        super(props);
        console.log("Exercise -- Props received---", this.props);
        this.didSwitchParentObject = true;
        this.codeSubmit = this.codeSubmit.bind(this);
    }

    codeSubmit(e) {
        let code = "";
        let id = "";
        e.preventDefault();
        code = this.refs.mycode.value;
        id = this.refs.exId.value;
        console.log("The code typed is here --> " + code + 'aaand id is :' + id);
        this.props.dispatch(ExerciseActions.sendCode(code, id));
    }

    render() {
        const defaultCode = "";
        let styleList = {
            color: "blue",
            cursor: "pointer"
        };
        let self=this;
        let selectedExerciseId = this.props.selectedExerciseId;
        console.log("props received in exercise", this.props);
        console.log('checking the defaultCode : ->'+this.props.exercise.defaultCode);
        return (
            <div>
                
            </div>
        );
    }
    componentDidUpdate ()
	{
        console.log('in componentdidupdate method');
        console.log(this.didSwitchParentObject);
        this.refs.mycode.value = this.props.exercise.defaultCode;
	    
	}
}

function mapStateToProps(state) {
    return {
        selectedExerciseId : state.viewControl.selectedExerciseId,
        currentExcercise: state.exercises.currentExc,
        exerciseControl: state.exerciseControls,
        testData: state.exerciseControls.result,
        exercise: state.exerciseControls.exercise
    }
}

export default connect(mapStateToProps)(Exercise);