import actionTypes from "./actionTypes";
import {getDrivers} from "../requests"
const startFetchDriverList=()=>{
    return {
        type:actionTypes.START_FETCH_DRIVER_LIST
    }
}
const fetchDriverListSuccess=(payload)=>{
    console.log(payload)
    return {
        type:actionTypes.FETCH_DRIVER_LIST_SUCCESS,
        payload
    }
}
 
const fetchDriverListFailed=()=>{
    return {
        type:actionTypes.FETCH_DRIVER_LIST_FAILED,
        payoad:{errMsg:"出错"}
    }
}
const endFetchDriverList=()=>{
    return {
        type:actionTypes.END_FETCH_DRIVER_LIST
    }
}
export const openAddDriverModal=()=>{
    return {
        type:actionTypes.OPEN_ADD_DRIVER_MODAL
    }
}
export const closeAddDriverModal=()=>{
    return {
        type:actionTypes.CLOSE_ADD_DRIVER_MODAL
    }
}
export const fetchDriverList=(Limit=10,Offset=1,ii)=>{
    return (dispatch)=>{
        dispatch(startFetchDriverList());
        getDrivers(Limit,Limit*(Offset-1)).then(
            resp=>{
                if(resp.Code==0){
                
                    dispatch(fetchDriverListSuccess({Count:resp.Data.Count,List:resp.Data.List,Limit,Offset}));   
                }else{
                    dispatch(fetchDriverListFailed());
                } 
            }
        ).catch(error=>{
            dispatch(fetchDriverListFailed());
        })
    }
 
}