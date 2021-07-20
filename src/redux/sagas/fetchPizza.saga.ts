import { put } from 'typed-redux-saga';
import axios from 'axios';

export default function* fetchPizza() {
    try {
        const pizza = yield axios.get('/api/pizza');
    } catch {
        console.log('IN fetchPizza, get all error');
    }
}
