const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('it is a home page');
    }
    else if(req.url=='/about'){
        res.writeHead(200,{"content-type":"text/html"})
        res.end("<h1>this is a about page</h1>");
    }
    else if(req.url=='/contact'){
        res.end("this is a contact page");
    }
     else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 page not found</h1>");
     }
})
server.listen(8000,"localhost",()=>{
    console.log("server is listining");
});