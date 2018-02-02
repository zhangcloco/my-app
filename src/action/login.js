'use strict'

import * as actionType from '../status/actionType.js'
import * as mUtil from '../utils/mUtils.js'

//注销 同步
export function log_out() {
    //删除登录信息
    deleteStore('userInfo')
    return {type: actionType.LOG_OUT}

}

export const log_in = (obj) => {

    return dispatch => {
        dispatch({
            type:actionType.LOG_ING
        })

        //异步请求登录
        new Promise((resolve,reject) => {
            console.log('ok')
            console.log(actionType.LOG_ING)
            setTimeout(() => {
                console.log(obj)
                mUtil.setTimeStore('userInfo',{
					username:obj.username
				})
				resolve({
					type:actionType.LOG_SUCCESS,
					username:obj.username
				})
            },1000)
        }).then((res) => {
            console.log('action')
            console.log(res)
            dispatch(res)
        })
    }
}

//获取登录信息
export function log_state() {
    console.log(actionType.LOG_OUT)
    let result = getTimeStore('userInfo')
    if (result.username) {
        return {type: actionType.LOG_SUCCESS, username: result.username}
    } else {
        return {type: actionType.LOG_OUT}
    }
}

//获取信息有效期
export function getTimeStore(name) {
    let data = localStorage.getItem(name)
            ? JSON.parse(localStorage.getItem(name))
            : {},
        now = Date.now();
    //获取超时时间,判断是否返回
    if (data.timeout) {
        if (data.timeout < now) {
            return {}
        } else {
            return data
        }
    } else {
        return {}
    }
}
//删除信息
export function deleteStore(name) {
    localStorage.removeItem(name)
}