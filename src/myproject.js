import React from 'react';
import ReactDOM from 'react-dom';
import Origin from './js/components/origin.jsx';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import InitialState from './js/reducers/intial-state.js';
import navReducer from './js/reducers/navigation-reducer.js';
import logger from "redux-logger";
import thunk from 'redux-thunk';
import exerciseReducer from './js/reducers/exercise-reducer.js';
import chaptersReducer from './js/reducers/chapters-reducer.js';
import exercisesReducer from './js/reducers/exercises-reducer';


const store = createStore(combineReducers({
    viewControl: navReducer,
    chapterControls: chaptersReducer,
    exercises: exercisesReducer,
    exerciseControls: exerciseReducer
}), InitialState, applyMiddleware(logger, thunk));

ReactDOM.render(<Provider store={store}>
    <div >

        <div className="jumbotron">
            <Origin />
        </div>
    </div>
</Provider>, document.getElementById("main"));
