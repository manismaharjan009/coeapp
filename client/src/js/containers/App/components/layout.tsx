import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Layout, Icon } from 'antd';

import MenuList from './menu';
//@ts-ignore
import Logo from '../../../../assets/images/logo.svg';

const { Header, Sider, Content } = Layout;

const LayoutContainer = ({ username, authorized, pageTitle, location, children, logout  }: any) => {

  const [collapsed, setCollapsed] = useState(true)

  const toggle = () => setCollapsed(!collapsed)

  if(authorized) {
    return (
      <Layout className="main-layout">
        <Sider breakpoint="lg"
          trigger={null}
          collapsible
          collapsedWidth="0"
          collapsed={collapsed}
        >
          <div className="logo ant-pro-sider-menu-logo">
            <Link to="/">
              <img src={Logo} width="30" />
              <h1>COE App</h1>
            </Link>
          </div>
          <div className="greeting">Welcome, {username} (A)</div>
          <MenuList location={location} logout={logout} mode="inline" theme="dark" />
        </Sider>

        <Layout>
          <Header>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
            {pageTitle}
            <div className={collapsed ? 'minor-menu sider-collapsed' : 'minor-menu'}>
              <MenuList location={location} logout={logout} mode="horizontal" theme="light"/>
            </div>
          </Header>
          <Content
            style={{
              margin: '84px 16px 24px',
              padding: 24,
              background: '#fff',
              minHeight: 'auto',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>

    );
  } else {
    return (
      <div className="container">{children}</div>
    );
  }
}

export default LayoutContainer;

