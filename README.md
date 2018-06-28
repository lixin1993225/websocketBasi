# webSocketBasic

后台代码，接受前台的信息
const http = require("http");
const io = require("socket.io");
//1、先创建http服务
let server = http.createServer();
server.listen(8080);
//2、创建webSocket服务
let wsServer = io.listen(server);
wsServer.on("connection",function(num1,num2){
	sock.on('a',function(sock){
		console.log(`接收到的数据:${num1},${num2}`)
	});
	//sock.on();//接受
	//sock.emit();//发射
});

//前台的代码：发送
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>index</title>
  <!--node_modules中的文件。socket.io/lib/client.js-->
	<script src="http://localhost:8080/socket.io/socket.io.js" charset="utf-8"></script>
	<script>
		let sock = io.connect("ws://localhost:8080");
		document.onclick = function(){
			sock.emit('a',12,5);
		}
	</script>
</head>
<body>
	
</body>
</html>