import fetch from '@/utils/fetch';

/**
 * @export 是否为管理员
 * @returns Boolean
 */
export function isManager(){
    return fetch({
        url:'/assetmanage/api/isManager',
        method:'post'
    })
}
/**
 * @export 获取资产列表
 * @returns list
 */
export function assetList(data){
    return fetch({
        url:'/assetmanage/api/getAllAsset',
        method:'get',
        params:data
    })  
}

/**
 * @export 用户登录接口
 * @param {any} data userName passWord
 * @returns 
 */
export function login(data){
    return fetch({
        url:'/loginuser/login',
        method:'get',
        params:data
    })
}

/**
 * @export 用户注册
 * @param {any} data 
 * @returns 
 */
export function regist(data){
    return fetch({
        url:'/loginuser/regist',
        method:'post',
        params:data
    })
}


/**
 * 查询图片接口
 * @export
 * @returns 
 */
export function findImg(){
    return fetch({
        url:'/loginuser/findImg',
        method:'get'
    })
}

/**
 * 添加单张图片接口
 * @export
 * @param {any} data 
 * @returns 
 */
export function addImg(data){
    return fetch({
        url:'/loginuser/addPhoto',
        method:'post',
        params:data
    })
}

/**
 * 删除单条文件
 * @export
 * @param {any} data 
 * @returns 
 */
export function delFile(data){
    return fetch({
        url:'/loginuser/delFile',
        method:'post',
        params:data
    })
}



