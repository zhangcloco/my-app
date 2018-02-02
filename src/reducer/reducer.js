'use strict'

//统一管理所有的reducer，方便后期扩展和维护

import { combineReducers } from 'redux'
import login from './login.js'

const reducer = combineReducers({
    login
})

export default reducer