import { React, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actionChannel } from 'redux-saga/effects';
import workoutReducer from '../../redux/reducers/workout.reducer';


function SelectFromWorkouts() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'GET_WORKOUT' });
  }, []);

  const workout = useSelector(store => store.workoutReducer);


  const dispatch = useDispatch();
  const history = useHistory();

  const handleWorkout1 = () => {
    dispatch({ type: 'GET_SINGLE_WORKOUT', payload: workout[0].id });
    history.push('/workoutType');

  }
  console.log(workout);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>


      <h3>Select From Workouts</h3>
      <ul>
        {workout.map((exercise) => {
          return (
            <button onClick={(event) => handleWorkout1(exercise.id)}>{exercise.workout_name}</button>);
        })}
      </ul>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default SelectFromWorkouts;
