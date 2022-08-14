const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('Here is short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>WE CAN'T SEEM TO FIND THE PAGE YOU ARE LOOKING FOR</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000)