import React from 'react';
import { Button } from 'antd';
import {adminRouter} from "./routes"
import {Route,Switch,Redirect} from "react-router-dom"
import {Frame} from "./components"
class App extends React.Component {
   
  render(){ 
    let menus=adminRouter.filter((item)=>{return item.isNav})
    return <Frame menus={menus}> 
      <Switch>
         {
             adminRouter.map(route=>{
                 return <Route 
                 key={route.pathname}
                 path={route.pathname}
                 component={route.component}                 
                 />
             })
         }
          <Redirect to={adminRouter[0].pathname} from="/admin" exact/>
          <Redirect to="/404" /> 
     </Switch> 
     </Frame>
}
}
 
export default App;