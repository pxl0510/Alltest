// import Driver from "./Driver";
// import FunCompute from "./FunCompute";
// import MessRouter from "./MessRouter";
// import NotFound from "./NotFound";
// import Login from "./Login";
import Loading from "../components/Loading";
import Loadable from "react-loadable"
const Driver=Loadable({
    loader:()=>import("./Driver"),
    loading:Loading
});
const FunCompute=Loadable({
    loader:()=>import("./FunCompute"),
    loading:Loading
});
const MessRouter=Loadable({
    loader:()=>import("./MessRouter"),
    loading:Loading
});
const NotFound =Loadable({
    loader:()=>import("./NotFound"),
    loading:Loading
});
const Login=Loadable({
    loader:()=>import("./Login"),
    loading:Loading
});
 
export  {
    Driver,
    FunCompute,
    MessRouter,
    NotFound,
    Login
}