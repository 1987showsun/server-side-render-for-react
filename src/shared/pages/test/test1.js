/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */
import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

const Test1 = () => {

    let params = useParams();
    const location = useLocation();
    console.log(location, params);

    return(
        <div>
            <p>test1</p>
            <Outlet />
        </div>
    );
}

export default Test1;