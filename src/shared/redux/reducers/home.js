/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */

export default (
    state = {
        list: []
    },action
) => {
    const { type="", payload="", list=[] } = action;
    switch( type ){
        case "MEMBERS":
            state = { ...state, list: list };
            break;
    }

    return state;
}