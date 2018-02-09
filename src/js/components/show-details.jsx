import React from 'react';
import { connect } from 'react-redux';


import ExerciseActions from '../action-creators/exercise-actions.js';
import ChapterActions from '../action-creators/chapter-actions.js';


class ShowDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let styleList = {
            cursor: "pointer",
            color: "blue",
            display: "inline-block"
        };
        let styles2 = {
            color: "black",
            cursor: "pointer",
            display: "inline-block"
        };
        let detailsStyles = {
            width: "750px"
        };
        var self = this;
        let chapterDisplay = this.props.chapterControl.chapters.map(function (chapt, index) {
            console.log('checking if map is working')
            return (
                <div key={index} style={detailsStyles}>

                    <i className="fa fa-folder" style={{ color: "#F4D03F" }}> <a onClick={self.props.dispatch.bind(self, ChapterActions.displayChapterId(chapt.id))} style={styleList}><p className='chName'>{chapt.name}</p></a></i>
                    <input ref='chpId' type='hidden' value={chapt.id} />
                    <p className='chDesc'>{chapt.Description}</p>
                </div>
            );
        });
        return (
            <div className="well" style={{float:"right","margin-right" :"50px",width:"750px"}}>
                
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

export default connect(mapStateToProps)(ShowDetails);