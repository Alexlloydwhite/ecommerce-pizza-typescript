import { takeEvery, put, call, StrictEffect } from "@redux-saga/core/effects";
import { ActionType } from '../action-types/index';
import axios, { AxiosResponse } from 'axios';

// Watcher
export function* fetchPizzaSaga(): Generator<StrictEffect> {
    yield takeEvery(ActionType.fetchPizza, createWorker);
}

// Worker 
export function* createWorker() {
    try {
        // Call API
        const listOfPizzas: AxiosResponse = yield call(axios.get, '/api/pizza');
        // Update redux store
        yield put({ type: ActionType.pizzaList, payload: listOfPizzas.data });
    } catch (err) { console.log(err); }
}