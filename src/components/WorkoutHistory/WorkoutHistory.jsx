import React from 'react';
import WorkoutType from '../WorkoutType/WorkoutType';
import SelectFromWorkouts from '../SelectFromWorkouts/SelectFromWorkouts';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function WorkoutHistory({  weightOne, weightTwo, weightThree, weightFour, value }) {
  return (
    <div className="container">
      <div>
        <p>Workout History</p>
      </div>

      <div>
        <p>User ID:</p>
      </div>

      <div>
        <p>Exercise 1:</p>
        <p>Weight Used: {weightOne}</p>
      </div>

      <div>
        <p>Exercise 2:</p>
        <p>Weight Used: {weightTwo}</p>
      </div>

      <div>
        <p>Exercise 3:</p>
        <p>Weight Used: {weightThree}</p>
      </div>

      <div>
        <p>Exercise 4:</p>
        <p>Weight Used: {weightFour}</p>
      </div>

      <div>
        <p>Date of Workout Completion: {value}</p>
      </div>

    </div>
  );
}

export default WorkoutHistory;
