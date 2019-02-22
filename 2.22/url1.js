var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
	
	
	var obj=url.parse(req.url,true).query
	
	res.end("用户名"+obj.username+"密码"+obj.password)
	
}).listen(3000)
	