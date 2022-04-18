import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function SelectFromWorkouts() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <p>Select From Workouts</p>
      <button>Back Workout 1</button>
      <button>Back Workout 2</button>
      <button>Back Workout 3</button>
      <button>Back Workout 4</button>
      <button>Arm Workout 1</button>
      <button>Arm Workout 2</button>
      <button>Arm Workout 3</button>
      <button>Arm Workout 4</button>
      <button>Chest Workout 1</button>
      <button>Chest Workout 2</button>
      <button>Chest Workout 3</button>
      <button>Chest Workout 4</button>
      <button>Shoulder Workout 1</button>
      <button>Shoulder Workout 2</button>
      <button>Shoulder Workout 3</button>
      <button>Shoulder Workout 4</button>
      <button>Leg Workout 1</button>
      <button>Leg Workout 2</button>
      <button>Leg Workout 3</button>
      <button>Leg Workout 4</button>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default SelectFromWorkouts;
