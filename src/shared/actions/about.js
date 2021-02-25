/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import axios from 'axios';

export const aboutAction = () => {
    return(dispatch) => {
        return axios.get('https://randomuser.me/api/').then(res => {
            const { results=[] } = res.data;
            dispatch({
                type: "MEMBERS",
                list: results
            });
        })
    }
}