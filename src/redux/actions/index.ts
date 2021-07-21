import { ActionType } from '../action-types/index';

interface PizzaAction {
    type: ActionType.pizzaList,
    payload: String
}

export type Action = PizzaAction;