import {request} from "network/request"

export function getHomeMultidata(){
    return request({
        url:"/home/multidata"
    })
    //返回的是一个promise对象
}

export function getHomeGoods(page,type){
    return request({
        url:"/home/data",
        params:{
            page,
            type
        }
    })
}