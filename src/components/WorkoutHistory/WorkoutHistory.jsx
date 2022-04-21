import { React, useEffect } from 'react';
import WorkoutType from '../WorkoutType/WorkoutType';
import SelectFromWorkouts from '../SelectFromWorkouts/SelectFromWorkouts';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function WorkoutHistory() {

  // const singleWorkout = useSelector(store => store.singleWorkoutReducer);
  const workoutHistory = useSelector(store => store.workoutHistoryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_WORKOUT_HISTORY' });
  }, []);


  return (
    
    <section className="container">
     

      <main>{workoutHistory.map(lift => (
        <>
        <div>{lift.user_id}</div>
        <div>{lift.workout_name}</div>
        <div>{lift.exercise_1}</div>
        <div>{lift.weight_used_1}</div>
        <div>{lift.exercise_2}</div>
        <div>{lift.weight_used_2}</div>
        <div>{lift.exercise_3}</div>
        <div>{lift.weight_used_3}</div>
        <div>{lift.exercise_4}</div>
        <div>{lift.weight_used_4}</div>
        <div>{lift.date}</div>
        </>
        
        
        
        
        
      ))}
      </main>
    </section>
    
  );
}
export default WorkoutHistory;
