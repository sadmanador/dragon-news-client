import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileSideNav from '../Pages/Others/Profile/ProfileSideNav/ProfileSideNav';

const Profile = () => {
    return (
        <main className='row bg-light rounded-4 shadow py-5'>
                <div className="col col-lg-4">
                    <ProfileSideNav></ProfileSideNav>
                </div>
                <div className="col col-lg-8">
                    <Outlet></Outlet>
                </div>
        </main>
    );
};

export default Profile;