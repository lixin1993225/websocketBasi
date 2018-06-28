const http = require("http");
const io = require("socket.io");

//1、先创建http服务
let server = http.createServer();
server.listen(8080);

//2、创建webSocket服务
let wsServer = io.listen(server);

wsServer.on("connection",function(sock){
	// sock.on('a',function(sock){
	// 	console.log(`接收到的数据:${sock}`)
	// })
	setInterval(function(){
		sock.emit('name',Math.random())
	},500)
})