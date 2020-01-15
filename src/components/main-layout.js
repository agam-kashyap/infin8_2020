import React from "react";
import { withRouter} from 'react-router-dom';

import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './css/main-layout.css';
import CFooter from './sections/Footer';

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
        <Content>
          <div style={{ background: 'linear-gradient(0deg, #6817ab 0%, #1fc8db 51%, #d723bc 75%, #9d23d5 100%)' }}>{this.props.children}</div>
        </Content>
      </Layout>
      </div>
    );
  }
}

export default MainLayout; 

