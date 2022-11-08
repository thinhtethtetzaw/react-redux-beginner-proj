import { SELECT_FOOD } from "../actions/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) =>{
    switch(action.type){
        case SELECT_FOOD:
            return action.payload;

        default:
            return {} ;
    }

    return {}
}