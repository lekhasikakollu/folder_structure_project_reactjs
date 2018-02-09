import React from 'react';
import { connect } from 'react-redux';


import ExerciseActions from '../action-creators/exercise-actions.js';
import ChapterActions from '../action-creators/chapter-actions.js';


export default class TreeComponent extends React.Component {
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
        let styleList3 = {
            width: "250px",
            float: "left",
            "paddingLeft": "20px"
        };

        //console.log('tc->'+this.props.currFolder.isToggled);
        var self = this;
        let chapterDisplay = this.props.chapters.map(function (chapt, index) {
            console.log('checking if map is working' + chapt.id)
            //console.log('currFolder id: ->'+self.props.currFolder.chId)
            return (
                <div key={index} >
                    <a onClick={self.props.displayFolders.bind(this, chapt.id, 'show_directory', !(chapt.isToggled))}><i className="fa fa-caret-right" style={styles2} /> </a>
                    &nbsp; <i className="fa fa-folder" style={{ color: "#F4D03F" }}></i> &nbsp;
                    <a onClick={self.props.displayFolders.bind(this, chapt.id, 'show_details', !(chapt.isToggled))} style={styleList}><p className='chName'>{chapt.name}</p></a>
                    <input ref='chpId' type='hidden' value={chapt.id} />
                    {(chapt.isToggled) &&
                        <TreeComponent chapters={chapt.subFolders} dispatchFunc={self.props.dispatchFunc} displayFolders={self.props.displayFolders} currFolder={self.props.currFolder} />
                    }
                </div>
            );
        });
        return (
            <div style={styleList3}>
                {chapterDisplay}
            </div>
        );
    }
    componentDidMount() {
        console.log('in component didmount of chapters');
        if(!this.props.currFolder.chId) this.props.dispatchFunc();
    }
}

// function mapStateToProps(state) {
//     return {
//         chapterControl: state.chapterControls
//     }
// }

// export default connect(mapStateToProps)(TreeComponent);