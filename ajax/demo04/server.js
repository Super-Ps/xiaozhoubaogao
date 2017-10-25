var express = require("express");  //引入express
var app = express();  //创建express实例
app.use(express.static("./"));  //把当前目录变成静态文件目录

app.get("/data",function(req,res){
    res.send("hello ajax");     //send方法，向客户端响应数据
})

app.listen(3000,function(){
    console.log("server is running");
})