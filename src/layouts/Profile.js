import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileSideNav from '../Pages/Others/Profile/ProfileSideNav/ProfileSideNav';

const Profile = () => {
    return (
        <main>
            <div className="row">
                <div className="col col-lg-4">
                    <ProfileSideNav></ProfileSideNav>
                </div>
                <div className="col col-lg-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </main>
    );
};

export default Profile;