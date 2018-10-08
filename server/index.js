import Express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import userRouter from './api/user'

const app = Express();

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)
let server = app.listen(8088, ()=> {

    const host = server.address().address
    const port = server.address().port
   console.log("Service Success http://%s:%s", host, port)
  
 })