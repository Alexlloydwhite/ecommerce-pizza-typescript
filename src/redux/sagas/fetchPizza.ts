import { takeEvery, put, call, StrictEffect } from "@redux-saga/core/effects";
import { ActionType } from '../action-types/index';
import axios, { AxiosResponse } from 'axios';

// Watcher
export function* fetchPizzaSaga(): Generator<StrictEffect> {
    console.log(`in fetchPizzaSaga`);
    yield takeEvery(ActionType.fetchPizza, createWorker);
}

// Worker 
export function* createWorker() {
    console.log(`in createWorker`);
    
    // Call API
    try {
        const listOfPizzas: AxiosResponse = yield call(axios.get, '/api/pizza');
        yield put({ type: ActionType.pizzaList, payload: listOfPizzas });
    } catch (err) { console.log(err); }
    // Update redux store
}