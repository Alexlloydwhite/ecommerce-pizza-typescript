import { combineReducers } from "redux";
import pizzaReducer from "./pizza.reducer";

const rootReducer = combineReducers({
  pizzas: pizzaReducer  
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;