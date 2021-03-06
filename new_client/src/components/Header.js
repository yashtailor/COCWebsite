import React from 'react';
import { Link } from 'react-router-dom';


import './Header.css';
export default function Header() {
  return (
    <div className="navbar">
      <div className="navbar-right">
        <Link to="/"><i className="fa fa-fw fa-home"></i> HOME</Link>
        <Link to="/about"><i className="fa fa-fw fa-info"></i> ABOUT US</Link>

        <Link to="/events"><i className="fa fa-fw fa-calendar"></i>EVENTS</Link>
        <Link to="/glimpse"><i className="fa fa-fw fa-info"></i>GLIMPSES</Link>
        <Link to="/blogs"><i className="fa fa-fw fa-pencil"></i>BLOGS</Link>
        <Link to="/signup"><i className="fa fa-fw fa-sign-in"></i> SIGN UP</Link>

      </div>
    </div>
  );
}
