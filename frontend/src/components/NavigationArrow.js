import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NavigationArrow.css'

export default ({ direction, to, inactive }) =>
  <div className='navigation-arrow'>
    { inactive ?
        <span className={'greyed-out glyphicon glyphicon-chevron-' + direction}></span>
      : <Link to={to}>
          <span className={'glyphicon glyphicon-chevron-' + direction}></span>
        </Link>
    }
  </div>;
