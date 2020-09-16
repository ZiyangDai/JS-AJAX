//引入express并创建应用对象
const express = require('express')
const { request } = require('express')
const app = express()

//创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
        //设置响应
    response.send('hello ajax')
})
app.post('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
        //设置响应
    response.send('hello ajax post')
})
app.all('/cors-server', (request, response) => {
        //设置响应头 设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*')
        response.send('hello cors')
    })
    //创建路由规则
app.get('/json-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
        //相应一个数据
    const data = {
            name: 'yousa'
        }
        //对对象进行字符串转化
    let str = JSON.stringify(data)
        //设置响应
    response.send(str)
})

//创建路由规则
app.get('/ie', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
        //设置响应
    response.send('hello ie -5')
})

//创建路由规则
app.all('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
        //设置响应
    setTimeout(() => {
        response.send('延时相应')
    }, 3000)
})

//jquery 服务
app.all('/jquery-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    const data = { name: '西木野蟹子' }
        //设置响应
    response.send(JSON.stringify(data))
})

//axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    const data = { name: '西木野蟹子' }
        //设置响应
    response.send(JSON.stringify(data))
})

//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    const data = { name: 'kaniko' }
        //设置响应
    response.send(JSON.stringify(data))
})

//jsonp 服务
app.all('/jsonp-server', (request, response) => {

    const data = { name: 'kaniko' }
        //设置响应
    let str = JSON.stringify(data)
        //需要返回一段js代码/函数调用↓
        // response.send('console.log("hello jsonp")')
    response.send(`handle(${str})`)

})

//用户名检测是否存在
app.all('/check-username', (request, response) => {

    const data = {
            exist: 1,
            msg: '用户名已经存在'
        }
        //设置响应
    let str = JSON.stringify(data)
    response.send(`handle(${str})`)

})

//用户名检测是否存在
app.all('/jquery-jsonp-server', (request, response) => {

        const data = {
                name: 'kaniko',
                age: 7
            }
            //设置响应
        let str = JSON.stringify(data)
            //接受callback参数
        let cb = request.query.callback
            // response.send('console.log("hello jsonp")')
        response.send(`${cb}(${str})`)

    })
    //监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，端口8000监听中')
})