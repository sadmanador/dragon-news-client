import React from "react";
import { NavLink } from "react-router-dom";

const ProfileSideNav = () => {
  return (
    <div>
      <h3>Profile</h3>
      <ul className="list-group">
        <li className="list-group-item"><NavLink className={({ isActive }) => isActive ? 'bg-primary text-white' : undefined} to="/profile/profile-info">Info</NavLink></li>
        <li className="list-group-item"><NavLink className={({ isActive }) => isActive ? 'bg-primary text-white' : undefined} to="/profile/profile-update">Update Profile</NavLink></li>
        <li className="list-group-item"><NavLink className={({ isActive }) => isActive ? 'bg-primary text-white' : undefined} to="/profile/password-reset">Password Reset</NavLink></li>
        <li className="list-group-item"><NavLink className={({ isActive }) => isActive ? 'bg-primary text-white' : undefined} to="/profile/delete-account">Delete Account</NavLink></li>
        
      </ul>
    </div>
  );
};

export default ProfileSideNav;
