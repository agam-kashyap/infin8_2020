import React from "react";
// import { withRouter} from 'react-router-dom';

import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './css/main-layout.css';

const { Content } = Layout;

// const Location = withRouter(props => {
//   const { location } = props;
//   return (
//     <Menu
//       theme="dark"
//       mode="horizontal"
//       selectedKeys={[location.pathname]}
//       style={{ lineHeight: '64px' }}
//     >
//       <Menu.Item key="/"><a href="/">Event</a></Menu.Item>
//       <Menu.Item key="/login"><a href="/login">Competitions</a></Menu.Item>
//     </Menu>
//   )
// })
class MainLayout extends React.Component{
  render() {
    return (
      <div>
        <Layout className="layout">
        <Content>
          <div style={{ background: 'linear-gradient(#373b44 ,#4286f4,#55E0F3)' }}>{this.props.children}</div>
        </Content>
      </Layout>
      </div>
    );
  }
}

export default MainLayout; 

