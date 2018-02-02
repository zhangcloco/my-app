'user strict'

import * as actionType from '../status/actionType.js'

const initialData = {
    username:null,
    loginstate:0    // 0未登录 1登录成功   -1正在登录
}

export default (state = initialData, action) => {
   switch(action.type) {
       case actionType.LOG_SUCCESS:
            console.log('reducer')
            console.log(action)
            return {
                loginstate:1,
                username:action.username
            }
        case actionType.LOG_ING:
            return {
                loginstate:-1,
                username:'正在登录'
            }
        case actionType.LOG_OUT:
            return initialData
        default:
            return initialData
   }
}