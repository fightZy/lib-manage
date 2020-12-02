import React from 'react';
import { Layout } from 'antd'
import Header from './component/header';
import './static/css/index.less'
import IndexRouter from './router';
import Container from './component/container';

function App() {
  return (
    <Layout className="pageLayout">
      <Header />
      <Layout.Content style={{minWidth:'1500px'}}>
        
        <IndexRouter />
        
      </Layout.Content>
      
      <Layout.Footer style={{textAlign:'center'}}>lib @2020  Created by ye</Layout.Footer>
    </Layout>
  );
}

export default App;
