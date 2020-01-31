import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import logo from "./logo.png"
import "./frame.less"
import {withRouter} from "react-router-dom"
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
 @withRouter
class  Frame extends React.Component {

    render(){
    
        return  <Layout style={{height:"100%"}}>
        <Header className="header uc-header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="uc-logo" >
              <img src={logo} alt="ucloud-iot"/>
           </div> 
        </Header>
        <Layout>
          <Sider width={200} style={{  overflow: 'auto',
        height: '100vh',
        position: 'fixed',
         marginTop: 64,
        left: 0,background: '#fff' }}>
            <Menu
              mode="inline"
              selectedKeys={[this.props.history.location.pathname]} 
              onClick={({key})=>{ 
                 this.props.history.push(key) 
              }}
              style={{ height: '100%', borderRight: 0 }}
            >
             {
                 this.props.menus.map((item,index)=>{
                 return  <Menu.Item key={item.pathname}>{item.title}</Menu.Item>
                 })
             }
          
            </Menu>
          </Sider>
          <Layout style={{ padding: '16px' ,height: "100%",marginLeft: 200, marginTop: 64}}> 
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
           
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    }
}
export default Frame