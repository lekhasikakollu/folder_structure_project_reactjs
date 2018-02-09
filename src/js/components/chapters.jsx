import React from 'react';
import { connect } from 'react-redux';
import TestCases from './test-cases.jsx';
import FontAwesome from "react-fontawesome";
import ExerciseActions from '../action-creators/exercise-actions.js';
import ChapterActions from '../action-creators/chapter-actions.js';


class Chapters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let styleList = {
            cursor: "pointer",
            color: "blue"
        };
        let styles2 = {
            color: "black",
            cursor: "pointer"
          };
        var self = this;
        let chapterDisplay = this.props.chapterControl.chapters.map(function (chapt, index) {
            console.log('checking if map is working')
            return (
                <div key={index}>
                <i className="fa fa-check" style={{ color: "#56b620" }} />
                 <a onClick={self.props.dispatch.bind(self, ChapterActions.displayChapterId(chapt.id))} style={styleList}><p className='chName'>{chapt.name}</p></a>
                    <input ref='chpId' type='hidden' value={chapt.id} />
                    <p className='chDesc'>{chapt.Description}</p>
                </div>
            );
        });
        return (
            <div>
                {chapterDisplay}
            </div>
        );
    }
    componentDidMount() {
        console.log('in component didmount of chapters');
        this.props.dispatch(ExerciseActions.getAllChapters());
    }
}

function mapStateToProps(state) {
    return {
        chapterControl: state.chapterControls
    }
}

export default connect(mapStateToProps)(Chapters);