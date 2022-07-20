const express=require("express")
const app=express()
const {createProxyMiddleware}=require("http-proxy-middleware")
const config=require("./config")
app.use("/user",createProxyMiddleware({
    target:config.userService_URL,
    pathRewrite:{
        '^/user':'/'
    },
    changeOrigin:true
}))

app.use("/admin",createProxyMiddleware({
    target:config.adminService_URL,
    pathRewrite:{
        '^/admin':'/'
    },
    changeOrigin:true
}))

module.exports=app