import React from "react";
import { Modal,  Form,
    Select,
    Input,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Icon,
    Rate,
    Checkbox,
    Row,
    Col,} from 'antd';
import {openAddDriverModal,closeAddDriverModal,fetchDriverList} from "../../actions/driver"
 
import {connect} from "react-redux"
const { Option } = Select;
class AddDriver extends React.Component { 
    constructor(props){
        super(props)
        this.state={
            fileList:[]  
        }
    }
 
  showModal = () => {
    this.props.openAddDriverModal()
  };

  handleOk = e => {
    e.preventDefault();
    console.log(this.state.fileList,"fileList")
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleCancel = e => {
    this.props.closeAddDriverModal()
  };
 
 
  handleFile=(e)=>{
      console.log(e)
   this.setState({fileList:[e.fileList[0]]})
   this.props.form.setFieldsValue({FileName:e.fileList[0]})
  }
  removeFile=()=>{
      this.setState({fileList:[]})
      this.props.form.setFieldsValue({FileName:undefined})
  }
normFile = e => { 
    if (Array.isArray(e)) {
        return e;
      }
      return e && [e.fileList[e.fileList.length-1]];
  }

  handleConfirm = (rule, value, callback) => {
    const { fileList } =this.state;
    if (fileList.length<1) {
        callback('请上传文件')
    } 
    callback()
}
  render() {
    const { getFieldDecorator, getFieldValue,setFieldsValue } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const {  fileList } = this.state;
    const props = {
        onRemove: file => {
        // this.props.form.setFieldsValue({FileName:[]})
          this.setState(state => {
            return {
              fileList: [],
            };
          });
        },
        beforeUpload: file => {
      this.props.form.setFieldsValue({FileName:90909090})
          this.setState(state => ({
            fileList: [file],
          }));
          return false;
        },
        fileList
      };
    return (
      <div> 
        <Modal
          title="新增驱动"
          visible={this.props.isOpenAddDriverModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Form {...formItemLayout}  > 
        <Form.Item   label="驱动名称">
          {getFieldDecorator('DriverName', {
            rules: [
              {
                required: true,
                message: '请输入驱动名称',
              } ,
              {
                  pattern:/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,
                  message:"由中文、字母、数字、“_”组成"
              },
              {
                  max:32,
                  message:"最大长度32位字符（中文算1位）"
              },
              {
                  min:4,
                  message:"至少4个字符（中文算1位）"
              }
            ],
          })(<Input  />)}
          </Form.Item>
        <Form.Item label="驱动类型" >
          {getFieldDecorator('DriverType', {initialValue:"user"})(
            <Select placeholder="请选择">
              <Option value="user">自定义</Option> 
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="通信协议类型" >
          {getFieldDecorator('Prototype', {initialValue:"user"})(
            <Select placeholder="请选择">
                 <Option value="modbus">modbus</Option> 
                 <Option value="websocket">websocket</Option> 
              <Option value="user">自定义</Option> 
            </Select>,
          )}
        </Form.Item> 
        <Form.Item label="开发语言" >
          {getFieldDecorator('Language', {initialValue:"Python"})(
            <Select placeholder="请选择">
                 <Option value="Python">Python</Option> 
                 <Option value="C">C</Option>  
            </Select>,
          )}
        </Form.Item> 
        <Form.Item label="CPU架构" >
          {getFieldDecorator('CPUType', {initialValue:"X86"})(
            <Select placeholder="请选择">
                 <Option value="X86">X86</Option> 
                 <Option value="ARM">ARM</Option>  
            </Select>,
          )}
        </Form.Item> 
        <Form.Item label="适用软件版本" >
          {getFieldDecorator('MinVersion', {initialValue:"1.0"})(
            <Select placeholder="请选择">
                 <Option value="1.0">1.0及以上版本</Option>  
            </Select>,
          )}
        </Form.Item> 
        <Form.Item label="驱动上传" > 
        {getFieldDecorator('FileName',{
            rules:[
               {required:true,
                message:"请上传文件"},
                 {
                    validator: this.handleConfirm
              }
            ]
        })(
            <Upload 
            {...props}
            >
              <Button>
                <Icon type="upload" /> 上传文件
              </Button>
            </Upload>,
          )}
        </Form.Item>
      </Form>
        </Modal>
      </div>
    );
  }
}
const mapstate=state=>({ 
    isOpenAddDriverModal:state.driver.isOpenAddDriverModal,
  })
  const AddDriver1= Form.create()(AddDriver)
  export default  connect(mapstate,{openAddDriverModal,closeAddDriverModal,fetchDriverList})(AddDriver1) 
 