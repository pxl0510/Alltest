import {
    Driver,
    FunCompute,
    MessRouter,
    NotFound,
    Login
} from "../views";

export const mainRouter=[ 
    {
        pathname:"/login",
        component:Login,
    } ,
    {
        pathname:"/404",
        component:NotFound,
    } 
]
export const adminRouter=[ 
    {
        pathname:"/admin/driver",
        component:Driver,
        title:"驱动管理",
        isNav:true
    },{
        pathname:"/admin/function",
        component:FunCompute,
        title:"函数计算",
        isNav:true
    },{
        pathname:"/admin/mess",
        component:MessRouter,
        title:"消息路由",
        isNav:true
    },{
        pathname:"/admin/404",
        component:NotFound, 
        isNav:false
    }
]
