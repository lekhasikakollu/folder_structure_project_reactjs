import React from 'react';
import { connect } from 'react-redux';

import ChapterActions from '../action-creators/chapter-actions.js';
import ExerciseActions from '../action-creators/exercise-actions.js';
import FontAwesome from "react-fontawesome";
class Exercises extends React.Component {
    constructor(props) {
        super(props);
        console.log('props received in excercises component : ');
    }

    render() {
        let styleList = {
            color: "blue",
            cursor: "pointer"
        };
        var self = this;
        let typeOfExc = 'current';
        // let c = this.props.currentExcercise;
        let exToDisplay = this.props.listToDisplay.map(function (excElem, index) {
            console.log('checking if map is working ---- From <Excercises />')
            return (
                <div key={index}>
                    <a onClick={self.props.dispatch.bind(self, ChapterActions.displayFullEcercise(excElem.id,typeOfExc))} style={styleList}> <p>{excElem.name}</p></a>
                    <p><i className="fa fa-check" style={{ color: "#56b620" }} /> </p>
                    
                </div>
            );
        });
        // let descDisplay = this.props.chapterControl.filter(function(chapterData){
        //     if(chapterData.name === c){
        //         return chapterData.Description;
        //     }

        // });
        return (
            <div>
            <h4>{this.props.currentExcercise}</h4>
         
                {exToDisplay}

            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('checking now'+state.exercises.excercisesList)
    return {
        
        currentExcercise : state.exercises.currentExc,
        listToDisplay: state.exercises.excercisesList
    }

}
export default connect(mapStateToProps)(Exercises);