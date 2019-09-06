import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, Icon } from 'antd';

const { Item } = Menu;

const MenuList = ({ location, theme, mode, logout }:any) => {
  const pathname = location.pathname.substring(1);
  const menuKey = pathname.length > 0 ? pathname : 'dashboard';
  const [current, setCurrent] = useState(menuKey);

  const handleClick = (e:any) => setCurrent(e.key);
  return(
    <>
      <Menu theme={theme} mode={mode}
        selectedKeys={[current]}
        onClick={handleClick}
      >
        <Item key="dashboard">
          <Link to="/" title="Dashboard">
            <Icon type="home" />
            <span>Dashboard</span>

          </Link>
        </Item>
        <Item key="participate">
          <Link to="/participate" title="Participate">
            <Icon type="apartment" />
            <span>Participate</span>
          </Link>
        </Item>
        <Item key="activity">
          <Link to="/activity" title="Activity">
            <Icon type="history" />
            <span>Activity</span>
          </Link>
        </Item>
        <Item key="members">
          <Link to="/members" title="Members">
            <Icon type="user" />
            <span>Members</span>
          </Link>
        </Item>
        <Item key="projects">
          <Link to="/projects" title="Projects">
            <Icon type="project" />
            <span>Projects</span>
          </Link>
        </Item>
        <Item key="projectupdate">
          <Link to="/projectupdate" title="Project Updates">
            <Icon type="book" />
            <span>Project Updates</span>
          </Link>
        </Item>
        <Item key="">
          <Link to="" title="Logout" onClick={logout} style={{color: 'red'}}>
            <Icon type="logout" />
            <span>Logout</span>
          </Link>
        </Item>
      </Menu>
    </>
  )
}

export default MenuList;