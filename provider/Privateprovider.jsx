import React from 'react';
import { use } from 'react';
import { AuthContext } from './Authprovider';
import { Navigate, NavLink, useLocation } from 'react-router';

const Privateprovider = ({children}) => {
    const {user} = use(AuthContext)
    const location = useLocation()

    if(!user){
        return <Navigate to={'/authLayouts/login'}replace state={{ from:location}}></Navigate>
    }

    return children
};

export default Privateprovider;