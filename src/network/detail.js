import {request} from "network/request"

export function getDetail(iid){
    return request({
        url:"/detail",
        params:{
            iid
        }
    })
}

export function getRecommend(){
    return request({
        url: '/recommend'
    })
}

//获取商品的基础信息
export class BaseInfo{
    constructor(itemInfo, columns, services){
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.lowNowPrice = itemInfo.lowNowPrice;
        this.lowPrice = itemInfo.lowPrice;
        this.discountDesc = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
    }
}

//获取店铺信息
export class ShopInfo{
    constructor(shopInfo){
        this.shopLogo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.cGoods = shopInfo.cGoods;
        this.cSells = shopInfo.cSells;
        this.score = shopInfo.score;
    }
}

//获取商品参数信息
export class GoodsParam{
    constructor(itemParams){
        this.info = itemParams.info.set;
        this.rule = itemParams.rule.tables[0];
    }
}

