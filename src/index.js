import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"; // redux
import {createStore, applyMiddleware} from "redux"; // redux
import ReduxPromise from 'redux-promise'; // middleware
import './tailwind.css';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise) (createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>
    ,
    document.querySelector('.container')
)

/*const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.querySelector('.container')
)*/
