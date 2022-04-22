import { React, useEffect } from 'react';
import WorkoutType from '../WorkoutType/WorkoutType';
import SelectFromWorkouts from '../SelectFromWorkouts/SelectFromWorkouts';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function WorkoutHistory() {

  const toEditPage = () => {
    
    history.push('/editWorkout');

  }

  const history = useHistory();

  
  const workoutHistory = useSelector(store => store.workoutHistoryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_WORKOUT_HISTORY' });
  }, []);

 


  return (
    
    <section className="container">

    
     

      <main>{workoutHistory.map(lift => (
        <>
        <div> <h1>User ID: {lift.user_id} </h1></div>
        <div> <h3>Workout Name: {lift.workout_name} </h3></div>
        <div> <h4>Exercise 1: {lift.exercise_1} </h4></div> 
        <div> <h4>Weight Used: {lift.weight_used_1} </h4> </div>
        <div> <h4>Exercise 2: {lift.exercise_2} </h4></div>
        <div> <h4>Weight Used: {lift.weight_used_2} </h4></div>
        <div> <h4>Exercise 3: {lift.exercise_3} </h4></div>
        <div> <h4>Weight Used: {lift.weight_used_3} </h4></div>
        <div> <h4>Exercise 4: {lift.exercise_4}</h4></div>
        <div> <h4>Weight Used: {lift.weight_used_4} </h4></div>
        <div> <h4>Date of Workout Completion: {lift.date}</h4>
        <button onClick={(event) => dispatch({ type: 'DELETE_WORKOUT', payload: lift.id })}>Delete Workout From History</button> <button onClick={toEditPage}>Edit Weight Used</button>
        </div>
        </>
        
        
        
        
        
      ))}
      </main>
    </section>
    
  );
}
export default WorkoutHistory;
