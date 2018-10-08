
const responseResult = (data, errorCode, errorMessage) => {

    return {
        respCode:{
            code: errorCode || 'WEIXIN-10000',
            message: errorMessage || ''
        },
        data
    }
};

export default responseResult


/* 如果这里用export 则引用的时候要 写 import {responseResult} from '../lib/reponse'
如果用 export default 则写 import responseResult from '../lib/reponse' */
