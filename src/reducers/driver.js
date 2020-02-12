import actionTypes from "../actions/actionTypes";
const initState={
    loading:false,
    List:[],
    Offset:1,
    Limit:10,
    Count:0,
    isOpenAddDriverModal:false
}

export default (state=initState,action)=>{
    switch(action.type){
        case actionTypes.OPEN_ADD_DRIVER_MODAL:{
            console.log(action)
            return {
                ...state,
                isOpenAddDriverModal:true
            }
        } 
            case actionTypes.CLOSE_ADD_DRIVER_MODAL:
                return {
                    ...state,
                    isOpenAddDriverModal:false
                }
        case actionTypes.START_FETCH_DRIVER_LIST:
            return {
                ...state,
                loading:true
            }
        case actionTypes.END_FETCH_DRIVER_LIST:
                return {
                    ...state,
                    loading:false
                }
        case actionTypes.FETCH_DRIVER_LIST_SUCCESS:
            {
               console.log(action.payload)
                return {
                    ...state,
                    loading:false,
                    List:action.payload.List,
                    Count:action.payload.Count,
                    Limit:action.payload.Limit,
                    Offset:action.payload.Offset
                }
            }
       
        case actionTypes.FETCH_DRIVER_LIST_FAILED:
             return {
                                ...state,
                                loading:false,
                                errMsg:action.payload.errMsg
                            }
                     
        default:
            return state;
    }
}