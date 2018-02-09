import React from 'react';
import ShowDetails from "./show-details.jsx";
import Exercises from './exercises.jsx';
import { connect } from 'react-redux';

import TreeComponent from './tree-component.jsx';
import ExerciseActions from '../action-creators/exercise-actions.js';
import ChapterActions from '../action-creators/chapter-actions.js';

class Origin extends React.Component {
    constructor(props) {
        super(props);
        this.dispatchFunc = this.dispatchFunc.bind(this);
        this.displayFolders = this.displayFolders.bind(this);
    }

    dispatchFunc() {
        this.props.dispatch(ExerciseActions.getAllChapters());
    }
    displayFolders(displayFolders, type ,isToggled) {
        console.log('in displayFolders of origin component' + displayFolders);
        this.props.dispatch.call(this, ChapterActions.displayChapterId(displayFolders, type,isToggled));
    }

    render() {
        let view = "";
        if (this.props.currentDisplay == "details") {
            view = <ShowDetails currFolder={this.props.currFolder}/>
        } else if (this.props.currentDisplay == "directory") {
            view = <Exercises />
        }
        return (
            <div >
                <TreeComponent chapters={this.props.chapterControl.chapters} dispatchFunc={this.dispatchFunc} displayFolders={this.displayFolders} currFolder={this.props.currFolder} />
                {view}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        mainview: state.viewControl.currentMainView,
        isLoading: state.exerciseControls.isExerciseLoading,
        currentDisplay: state.viewControl.currentDisplay,
        chapterControl: state.chapterControls,
        currFolder: state.viewControl.currentFolder
    }
}

export default connect(mapStateToProps)(Origin);