import React from 'react';
import WorkoutType from '../WorkoutType/WorkoutType';
import SelectFromWorkouts from '../SelectFromWorkouts/SelectFromWorkouts';
import { useSelector } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function WorkoutHistory() {

  const singleWorkout = useSelector(store => store.singleWorkoutReducer);
  return (
    <div className="container">
      <div>
        <p>Workout History</p>
      </div>

      <div>
        <p>User ID: {singleWorkout.user_id}</p>
      </div>

      <div>
        <p>Exercise 1: {singleWorkout.exercise_1}</p>
        <p>Weight Used: {singleWorkout.weight_used_1}</p>
      </div>

      <div>
        <p>Exercise 2: {singleWorkout.exercise_2}</p>
        <p>Weight Used: {singleWorkout.weight_used_2}</p>
      </div>

      {/* <div>
        <p>Exercise 3: {singleWorkout.exercise_3}</p>
        <p>Weight Used: {singleWorkout.weight_used_3}</p>
      </div> */}

      <div>
        <p>Exercise 4: {singleWorkout.exercise_4}</p>
        <p>Weight Used: {singleWorkout.weight_used_4}</p>
      </div>

      <div>
        <p>Date of Workout Completion: {singleWorkout.date}</p>
      </div>

    </div>
  );
}

export default WorkoutHistory;
