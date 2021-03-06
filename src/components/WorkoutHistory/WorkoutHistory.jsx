import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'; import EditWorkout from '../EditWorkout/EditWorkout';

/*
This component displays the workout history
table from the EditWorkout component.
*/
function WorkoutHistory() {

  const workoutHistory = useSelector(store => store.workoutHistoryReducer);
  console.log(workoutHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_WORKOUT_HISTORY' });
  }, []);

  return (

    <section className="container">

      <main>{workoutHistory.map(lift => (
        <EditWorkout lift={lift} />
      ))}
      </main>
    </section>
  );
}
export default WorkoutHistory;
