import React from 'react';
import { Outlet } from 'react-router-dom';

const Users = () => {
    return (
        <div>
            Users
            <Outlet></Outlet>
        </div>
    );
};

export default Users;
