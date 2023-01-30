import React from "react";
import { NavLink } from "react-router-dom";

const ProfileSideNav = () => {
  return (
    <div>
      <h3>Profile</h3>
      <ul className="list-group  shadow">
        <li className="list-group-item"><NavLink className={ ({ isActive }) => isActive ? 'bg-primary text-white active text-decoration-none d-block py-1 px-3 rounded shadow fw-semibold' : "text-decoration-none text-secondary"} to="/profile/profile-info">Info</NavLink></li>
        <li className="list-group-item"><NavLink className={ ({ isActive }) => isActive ? 'bg-primary text-white active text-decoration-none d-block py-1 px-3 rounded shadow fw-semibold' : "text-decoration-none text-secondary"} to="/profile/profile-update">Update Profile</NavLink></li>
        <li className="list-group-item"><NavLink className={ ({ isActive }) => isActive ? 'bg-primary text-white active text-decoration-none d-block py-1 px-3 rounded shadow fw-semibold' : "text-decoration-none text-secondary"} to="/profile/password-reset-email">Password Reset</NavLink></li>
        <li className="list-group-item"><NavLink className={ ({ isActive }) => isActive ? 'bg-primary text-white active text-decoration-none d-block py-1 px-3 rounded shadow fw-semibold' : "text-decoration-none text-secondary"} to="/profile/delete-account">Delete Account</NavLink></li>
        
      </ul>
    </div>
  );
};

export default ProfileSideNav;
