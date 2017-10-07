import React from 'react';
import { Link } from 'react-router-dom';

export default ({ direction, to, inactive }) =>
  <div>
    { inactive ?
        <div>inactive arrow</div>
      : <Link to={to}>{direction} arrow</Link>
    }
  </div>;
