/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */
import React from 'react';
import { Outlet } from 'react-router-dom';

const Index = () => {
    return(
        <>
            test index
            <Outlet />
        </>
    );
}

export default Index;