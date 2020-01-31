import React from "react";
import { Button,Table } from 'antd';
 
import {fetchDriverList} from "../../actions/driver"
import {connect} from "react-redux"
const dataSource = [ ];
  
  const columns = [
    {
      title: '驱动名称',
      dataIndex: 'DriverName',
      key: 'DriverName',
    },
    {
      title: '驱动描述',
      dataIndex: 'Description',
      key: 'Description',
    },
    {
      title: '创建时间',
      dataIndex: 'CreateTime',
      key: 'CreateTime',
    },
  ];
class Driver extends React.Component {
    constructor(props){
      super(props)
    
    }
    componentDidMount(){
      this.props.fetchDriverList()
    }
    handleTableChange=(pagination)=>{
      let Limit=pagination.pageSize,Offset=pagination.current;
      this.props.fetchDriverList(Limit,Offset)
    }
    render(){
     let {List,loading,Count,Offset}=this.props
        return <Table 
        rowKey={record => record.DriverID}
        dataSource={List}
        loading={loading}
        pagination={{current:Offset,total:Count}}
        onChange={this.handleTableChange}
       columns={columns}
       />
    }
}

const mapstate=state=>({
  List:state.driver.List,
  loading:state.driver.loading,
  Count:state.driver.Count,
  Limit:state.driver.Limit,
  Offset:state.driver.Offset,
})
export default  connect(mapstate,{fetchDriverList})(Driver) 