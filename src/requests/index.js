import axios from "axios";
import { message } from 'antd';
// const isDev=pross.env.NODE_ENV=="development"

const service=axios.create({
    baseURL: "http://rap2api.taobao.org/app/mock/243436" 
})

service.interceptors.request.use((config)=>{
    return config
})

service.interceptors.response.use((resp)=>{
if(resp.status==200){
    if(resp.data.Code==0){
        return resp.data
    }else{
        message.error("接口返回错误")
    } 
}else{
    message.error(resp.data.errMsg)
}
})

export const getDrivers=(Offset=0,Limit=10)=>{
    return service.post("/api/v1/driver/list",{
        Offset,
        Limit
    })
}