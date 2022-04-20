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

function* getSingleWorkout(action) {
    const id = action.payload;
    console.log(action.payload);
    try {
        const response = yield axios.get(`/api/workoutType/${id}`);
        yield put({ type: 'SET_SINGLE_WORKOUT', payload: response.data });
    } catch (error) {
        console.log('Workout get request failed', error);
    }

}

// function* addWorkout(action) {
//     try {
//       yield axios.post('/api/workoutHistory', action.payload)
//       yield put({ type: 'GET_WORKOUT' });
  
//     } catch (error) {
//       console.log(error);
//     }
//   }

function* workoutSaga() {
    console.log('in workout saga');
    yield takeEvery('GET_WORKOUT', getWorkout);
    yield takeEvery('GET_SINGLE_WORKOUT', getSingleWorkout);
}

export default workoutSaga;