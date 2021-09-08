import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title"><img src="./images/logo2.png" width="150"></img></h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id===1 && (
          <>
            <Link className="navLink" to="/register">
              Register User
            </Link>
        {/* will be the Admin link for the SUPERUSER login */}
            <Link className="navLink" to="/">
              Admin
            </Link>
        {/* will be the Admin link for the companies page */}
            <Link className="navLink" to="/SearchPage">
              Companies
            </Link>
        {/* will be the Admin link for the feedback page */}
            <Link className="navLink" to="/info">
              Feedback
            </Link>
          </>
        )}
        {!user.id && (
          <Link className="navLink" to="/login">
            Login
          </Link>
        )}
        {user.id && (
          <>
            <LogOutButton className="navLink" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;

