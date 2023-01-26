import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dragon-news-server-two-silk.vercel.app/new-categories')
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