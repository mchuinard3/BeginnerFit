import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* getWorkout() {
    try {
        const response = yield axios.get('/api/workoutType');
        yield put({ type: 'SET_WORKOUT', payload: response.data });
    } catch (error) {
        console.log('Workout get request failed', error);
    }

}

function* workoutSaga() {
    console.log('in workout saga');
    yield takeLatest('GET_WORKOUT', getWorkout);
}

export default workoutSaga;