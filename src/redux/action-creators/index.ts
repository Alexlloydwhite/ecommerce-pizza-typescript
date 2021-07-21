import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions/index';

export const PizzaList = (list: String) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.pizzaList,
            payload: list
        });
    }
}