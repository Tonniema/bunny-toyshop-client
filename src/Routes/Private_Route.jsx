//eslint-disable-next-line
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Loader from '../Loader/Loader';
import { AuthContext } from '../Providers/AuthProviders';

const Private_Route = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    
    
    const location = useLocation()
    console.log(location);
    if (loading) {
       return  <Loader></Loader>
    }
    
    if (user) {
        return children ;
    
    } 
   
    return <Navigate to="/Login" state={{from: location}} replace={true} ></Navigate> 
};

export default Private_Route;
// 
// 