//这里来改本地和dev
//npm run build && npm start (3000)
//npm run build && NODE_ENV=production node server.js (3033)

//注意 npm run generate 的时候也是要看哪个开哪个 还有就是static 目录下的东西也会被打包进dist根目录

var serverRoot = process.env.NODE_ENV === 'development' ? "http://localhost:8080/" : "http://localhost:8080/";
// var serverRoot = process.env.NODE_ENV === 'development' ? "http://192.168.10.85:3007/" : "http://192.168.10.85:3007/";
// var serverRoot = process.env.NODE_ENV === 'development' ? "http://192.168.10.85:3008/" : "http://192.168.10.85:3008/";
// var serverRoot = process.env.NODE_ENV === 'development' ? "http://192.168.10.85:3009/" : "http://192.168.10.85:3009/";
module.exports=serverRoot