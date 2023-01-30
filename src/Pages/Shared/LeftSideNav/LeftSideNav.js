import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dragon-news-server-two-silk.vercel.app/new-categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="d-none d-lg-block bg-light p-3 rounded shadow">
      {categories.map((category) => (
        <p key={category.id}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-info text-white active d-inline-block py-2 px-3 rounded text-decoration-none fw-semibold shadow"
                : "text-decoration-none text-secondary"
            }
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
