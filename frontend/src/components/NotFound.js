import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NotFound.css';

export default () =>
  <span id="text-404">
    <span>The page you are looking for does not exist.</span>
    <br/>
    <p>Click <Link to='/about'>here</Link> to go back.</p>
  </span>;
