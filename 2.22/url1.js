var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
	
	
	var obj=url.parse(req.url,true).query
	
	if (obj.username=="12333"&&obj.password=="333") {
		res.end("登录成功")
	} else{
		res.end("密码错误")
	}
	
}).listen(3000)
	