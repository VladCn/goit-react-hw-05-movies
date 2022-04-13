import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const Header = styled.header`
  display: flex;
  padding: 10px;
  border: 1px solid black;
`;
const Navlink = styled(NavLink)`
  margin-right: 5px;
  text-decoration: none;
  &.active {
    color: red;
  }
`;

const Layout = () => {
  return (
    <div>
      <Header>
        <Navlink to="/">Home</Navlink>

        <Navlink to="/movies">Movies</Navlink>
      </Header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
