import React from "react";
import { NavLink } from "react-router-dom";

const ProfileSideNav = () => {
  return (
    <div>
      <h3>Profile</h3>
      <div className="shadow rounded p-4">
        <p>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline-success btn-lg text-decoration-none d-block py-1 px-3 rounded shadow fs-7"
                : "text-decoration-none text-secondary"
            }
            to="/profile/profile-info"
          >
            Info
          </NavLink>
        </p>
        <p>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline-success btn-lg text-decoration-none d-block py-1 px-3 rounded shadow fs-7"
                : "text-decoration-none text-secondary"
            }
            to="/profile/profile-update"
          >
            Update Profile
          </NavLink>
        </p>
        <p>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline-success btn-lg text-decoration-none d-block py-1 px-3 rounded shadow fs-7"
                : "text-decoration-none text-secondary"
            }
            to="/profile/password-reset-email"
          >
            Password Reset
          </NavLink>
        </p>
        <p>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline-danger btn-lg text-decoration-none d-block py-1 px-3 rounded shadow fs-7"
                : "text-decoration-none text-secondary"
            }
            to="/profile/delete-account"
          >
            Delete Account
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default ProfileSideNav;
