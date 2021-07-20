import { ActionType } from '../action-types/index';

interface PizzaAction {
    type: ActionType.pizzaList
}

export type Action = PizzaAction;