import "../App.css"
import React from 'react'
import {Link} from 'react-router-dom'

const navigation = () => {
  return (
    <div>
      <li>
        <Link to="/"> First Project </Link>
      </li>
    </div>
  );
}


export default navigation;
