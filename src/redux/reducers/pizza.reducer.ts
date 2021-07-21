import { ActionType } from "../action-types";
import { Action } from '../actions/index';

const pizzaReducer = (state = [], action: Action) => {
    switch(action.type) {
        case ActionType.pizzaList:
            return action.payload;
        default:
            return state;
    }
}

export default pizzaReducer;