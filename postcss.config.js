module.exports = {
    plugins: {
        "autoprefixer": {},
        "postcss-px-to-viewport": {
            "viewportWidth": "320", //视窗的宽度，对应的是我们设计稿的宽度
            "viewportHeight": "568", // 视窗的高度
            "unitPrecision": 2, //指定`px`转换为视窗单位值的小数位数(很多时候无法整除)
            "viewportUnit": "vw", //指定需要转换成的视窗单位，建议使用vw
            "selectorBlackList": ['tabbar-item'], //指定不转换为视窗单位的类
            "minPixelValue": 1, // 小于或等于`1px`不转换为视窗单位
            "mediaQuery": false, // 允许在媒体查询中转换`px`
            // "exclude": /(/|\)(node_modules)(/|\)/
        },
    }
};