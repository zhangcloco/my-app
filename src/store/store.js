'use strict'

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' //  中间件
import rootReducer from '../reducer/reducer.js'
// import {routerMiddleware, push} from 'react-router-redux'
//////



//////////

const middlewares = [thunk] // 将中间件放在数组里
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState)
}