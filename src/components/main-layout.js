import React from "react";
import { withRouter} from 'react-router-dom';

import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './css/main-layout.css';

const { Header, Content, Footer } = Layout;

const Location = withRouter(props => {
  const { location } = props;
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[location.pathname]}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="/"><a href="/">Event</a></Menu.Item>
      <Menu.Item key="/login"><a href="/login">Competitions</a></Menu.Item>
    </Menu>
  )
})
class MainLayout extends React.Component{
  render() {
    return (
      <div>
        <Layout className="layout">
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo">
            <h1></h1>
          </div>
          <Location/>
        </Header>
        <Content>
          {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div> */}
          <div style={{ background: '#fff'}}>{this.props.children}</div>
          {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{this.props.location.pathname}</div> */}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Made by Zense</Footer>
      </Layout>
      </div>
    );
  }
}

export default MainLayout; 

