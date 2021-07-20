const pizzaReducer = (state=[], action: any) => {
    switch(action.type) {
        case 'SET_PIZZAS':
            return action.payload;
        default:
            return state;
    }
}

export default pizzaReducer;