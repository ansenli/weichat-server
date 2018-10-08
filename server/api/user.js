import express from 'express'
import Mock from 'mockjs'
const userRouter = express.Router()
const contentType = {
    'Content-Type': 'application/json;charset=utf-8'
};
import responseResult from '../libs/reponse'

import {teamRoles} from '../data-mock/user'

userRouter.get('/:name', function(request, response, next) {
    var data = Mock.mock({
        "teamRoles":teamRoles
    });
    response.writeHead(200, contentType);

    var responseData = responseResult(data);
    setTimeout(function() {
        response.end(JSON.stringify(responseData));
    }, 2000);

});


 
export default userRouter