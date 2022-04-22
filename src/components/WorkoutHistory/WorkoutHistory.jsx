import { React, useEffect, useState } from 'react';
import WorkoutType from '../WorkoutType/WorkoutType';
import SelectFromWorkouts from '../SelectFromWorkouts/SelectFromWorkouts';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EditWorkout from '../EditWorkout/EditWorkout';



function WorkoutHistory({}) {

 

 

 


  const workoutHistory = useSelector(store => store.workoutHistoryReducer);
  const dispatch = useDispatch();
  console.log('HERE', workoutHistory[0]?.id);

 



  useEffect(() => {
    dispatch({ type: 'GET_WORKOUT_HISTORY' });
  }, []);





  return (

    <section className="container">




      <main>{workoutHistory.map(lift => (
        <EditWorkout lift={lift}/>






      ))}
      </main>
    </section>

  );
}
export default WorkoutHistory;
