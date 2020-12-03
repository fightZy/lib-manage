import React, {  useRef } from 'react';
import Subnav from '../../../component/subnav';
import { Col, Row } from 'antd';
import RegisterRouter from '../../../router/registerrouter';

export default function Center(props) {
    let { children } = props;
    let contentdom = useRef(null)
    
    // useEffect(()=>{
    //     console.log(contentdom);
    // })
    return <Row style={{margin:"50px 20px",height:"100%"}}>
        <Col span={6} ><Subnav {...props}/></Col>
        <Col span={18} style={{padding:"10px 10px",overflow:'hidden'}} ref={contentdom}>
            <RegisterRouter routes={children} laydom={contentdom}  />
        </Col>
    </Row>




}