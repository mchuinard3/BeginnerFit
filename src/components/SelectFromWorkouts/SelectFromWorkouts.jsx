import { React, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SelectFromWorkouts() {

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'GET_WORKOUT' });
  }, []);

  const workout = useSelector(store => store.workoutReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleWorkout = (id) => {
    dispatch({ type: 'GET_SINGLE_WORKOUT', payload: id });
    history.push('/workoutType');

  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <h3>Select From Workouts</h3>
      <ul>
        {workout.map((exercise) => {
          return (
            <button onClick={(event) => handleWorkout(exercise.id)}>{exercise.workout_name}</button>);
        })}
      </ul>
      <LogOutButton className="btn" />
    </div>
  );
}

export default SelectFromWorkouts;
