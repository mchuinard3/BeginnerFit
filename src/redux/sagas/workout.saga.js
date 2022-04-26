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

// function* getWorkoutProgress(action) {
//     const id = action.payload;
//     console.log(action.payload);
//     try {
//         const response = yield axios.get(`/api/workoutHistory/${id}`);
//         yield put({ type: 'SET_SINGLE_WORKOUT', payload: response.data });
//     } catch (error) {
//         console.log('Workout get request failed', error);
//     }

// }

function* getWorkoutHistory() {

    try {
        const response = yield axios.get(`/api/workoutHistory`);
        yield put({ type: 'SET_WORKOUT_HISTORY', payload: response.data });
    } catch (error) {
        console.log('Workout get request failed', error);
    }

}

function* postWorkoutHistory(action) {
    try {
        yield axios.post('/api/workoutType', action.payload)
        yield put({ type: 'GET_WORKOUT_HISTORY' });

    } catch (error) {
        console.log(error);
    }
}

function* deleteWorkout(action) {
    const id = action.payload;
    console.log('saga deleteWorkout func id:', id);
    try {
        yield axios.delete(`/api/workoutHistory/${id}`)
        yield put({ type: 'GET_WORKOUT_HISTORY' })
    } catch (error) {
        console.log(error);
    }
}

function* editWorkout(action) {
   
    console.log('saga editWorkout func id:', action.payload);
    try {
        yield axios.put(`/api/workoutHistory`, action.payload)
        yield put({ type: 'GET_WORKOUT_HISTORY' })
    } catch (error) {
        console.log(error);
    }
}

function* workoutSaga() {
    console.log('in workout saga');
    yield takeEvery('GET_WORKOUT', getWorkout);
    yield takeEvery('GET_SINGLE_WORKOUT', getSingleWorkout);
    yield takeEvery('POST_WEIGHT_HISTORY', postWorkoutHistory);
    yield takeEvery('GET_WORKOUT_HISTORY', getWorkoutHistory);
    yield takeEvery('DELETE_WORKOUT', deleteWorkout);
    yield takeEvery('EDIT_WORKOUT', editWorkout);
    // yield takeEvery('GET_WORKOUT_PROGRESS', getWorkoutProgress);
}

export default workoutSaga;