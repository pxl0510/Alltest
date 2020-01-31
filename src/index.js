import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import {mainRouter} from "./routes";
import {Provider} from "react-redux";
import store from "./store"
import "./index.less"
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom"
ReactDOM.render(  
    <Provider store={store}>
 <ConfigProvider locale={zhCN}>
 <Router>
     <Switch>
         <Route path="/admin" render={(routerProps)=>{
             return <App {...routerProps}/>
         }}/>
         {
             mainRouter.map(route=>{
                 return <Route 
                 key={route.pathname}
                 path={route.pathname}
                 component={route.component}                 
                 />
             })
         }
         <Redirect to="/admin" from="/" exact/>
         <Redirect to="/404" />
     </Switch>
 </Router>
  </ConfigProvider>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
