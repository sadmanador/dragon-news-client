import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/new-categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, []);

    return (
        <div className='d-none d-lg-block'>
            {
                categories.map(category => <p key={category.id}>
                    <NavLink to={`/category/${category.id}`}>{category.name}</NavLink>
                    </p>)
            }
        </div>
    );
};

export default LeftSideNav;