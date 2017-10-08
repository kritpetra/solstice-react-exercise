import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

export default ({ location }) =>
  <div className='header'>
    <HeaderLink to='/about' inactive={location === 'about'}>
      About
    </HeaderLink>
    <HeaderLink to='/energy' inactive={location === 'energy'}>
      Energy Use
    </HeaderLink>
    <HeaderLink to='/costs' inactive={location === 'costs'}>
      Energy Costs
    </HeaderLink>
  </div>;

const HeaderLink = ({ to, inactive, children }) =>
  <Link className={inactive ? 'header-link-inactive' : 'header-link'} to={to}>
    { children }
  </Link>;
