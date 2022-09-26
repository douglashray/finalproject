import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions'

const Nav = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const authenticated = useSelector(state => state.authenticated);

  const logOut = () => {
    console.log('signout');
    dispatch(logout(() => {
      history.push('/');
    }));
  }

  console.log('navigation');

  const renderNav = () => {
    if (authenticated) {
      return (
        <>
          <Link to='/orders'>
            <li>Orders</li>
          </Link>
          <li><LogOutButton href="#" onClick={logOut}>Log Out</LogOutButton> </li>
        </>
      );
    } else {
      return (
        <>
          {/* <li>
          <NavLink
    className={({ isActive }) =>
      isActive ? "active nav-link" : "nav-link"
    }
    to="/signup"
    >
    About
   </NavLink></li> */}
   <li>
   <Link to='/signup'>Sign Up</Link></li>
          <li><Link to='/login'>Log In</Link></li>
        </>
      );
    }
  }


  return (
    <NavContainer>
      <NavLinks>
      <NavLink
    className={({ isActive }) =>
      isActive ? "active nav-link" : "nav-link"
    }
    aria-current="page"
    to="/"
   >
    Home
   </NavLink> 
      
        {renderNav()}
      </NavLinks>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
position: fixed;
z-index: 999;
background: hsl(0, 0%, 13%);
color: whitesmoke;
margin: 0;
width: 100%;
height: auto;
padding: 1.5em;
#logo {
  position: relative;
  float: left;
  width: 150px;
  height: auto;
}
a {
  color: #fff;
}
`;

const NavLinks = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
list-style: none;
li: display: inline-block;
}
`;

const LogOutButton = styled.div`
  background: none;
  border: 1px;
  color: green;
  font-size: 16px;
`;