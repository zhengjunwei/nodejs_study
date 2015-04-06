var fs = require("fs");
var route = require("url");
var http = require("http");
//解析路由
function get_route(req){
	var url = req.url;
	var pathname = route.parse(url).pathname;
	console.log(pathname);
	return pathname;
}

//
fs.createReadStream
//渲染模板
function render(path,res){
	res.writeHead(200,{"Content-Type":"text/html"});
	switch(path){
		case "index":
			fs.createReadStream("./index.html").pipe(res);
			break;  
		case "detail":
			fs.createReadStream("./detail.html").pipe(res);
			break;
	}
}

http.createServer(function(req,res){
	//路由
	switch(get_route(req)){
		case "/index":
			render("index",res);
			break;
		case "/detail":
		    render("detail",res);
		    break;
		default:
		    res.end("404 error");
			break;
	}
		//res.end("Hello world\n");
}).listen(8080,"127.0.0.1");
console.log("server started!");
