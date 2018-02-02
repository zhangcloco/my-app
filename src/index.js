import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './router/';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/store.js'

/////////////////////
// import rootReducer from './reducer/reducer.js'
// import {BrowserRouter} from 'react-router-dom';
// import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
// import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk' //  中间件
// // 这里继续引入 `routerMiddleware` 通过 `history` 生成一个实例。 举个栗子
// const middleware = routerMiddleware(BrowserRouter)

// // 导入到 `store` 中
// const store = createStore(rootReducer, applyMiddleware(middleware), applyMiddleware(thunk))
///////////////////////////////////////////////
const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        <Route />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
