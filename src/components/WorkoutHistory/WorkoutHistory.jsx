import { React, useEffect, useState } from 'react';
import WorkoutType from '../WorkoutType/WorkoutType';
import SelectFromWorkouts from '../SelectFromWorkouts/SelectFromWorkouts';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



function WorkoutHistory() {

  const [editWeight1, setEditWeight1] = useState(false);
  const [editWeight2, setEditWeight2] = useState(false);
  const [editWeight3, setEditWeight3] = useState(false);
  const [editWeight4, setEditWeight4] = useState(false);

  const history = useHistory();

  const handleWeight1 = () => {
    console.log('clicked');
    setEditWeight1(!editWeight1)
}

const handleWeight2 = () => {
  console.log('clicked');
  setEditWeight2(!editWeight2)
}

const handleWeight3 = () => {
  console.log('clicked');
  setEditWeight3(!editWeight3)
}

const handleWeight4 = () => {
  console.log('clicked');
  setEditWeight4(!editWeight4)
}

  
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
        <div>  <div>{editWeight1 ? <div><input type="text"/> <button>Save Edit</button></div> : <div><h4>Weight Used: {lift.weight_used_1} </h4> <button onClick={handleWeight1}> Edit Weight Used</button></div> }   </div> </div>
        <div> <h4>Exercise 2: {lift.exercise_2} </h4></div>
        <div>  <div>{editWeight2 ? <div><input type="text"/> <button>Save Edit</button></div> : <div><h4>Weight Used: {lift.weight_used_2} </h4> <button onClick={handleWeight2}> Edit Weight Used</button></div> }   </div> </div>
        <div> <h4>Exercise 3: {lift.exercise_3} </h4></div>
        <div>  <div>{editWeight3 ? <div><input type="text"/> <button>Save Edit</button></div> : <div><h4>Weight Used: {lift.weight_used_3} </h4> <button onClick={handleWeight3}> Edit Weight Used</button></div> }   </div> </div>
        <div> <h4>Exercise 4: {lift.exercise_4}</h4></div>
        <div>  <div>{editWeight4 ? <div><input type="text"/> <button>Save Edit</button></div> : <div><h4>Weight Used: {lift.weight_used_4} </h4> <button onClick={handleWeight4}> Edit Weight Used</button></div> }   </div> </div>
        <div> <h4>Date of Workout Completion: {lift.date}</h4>
        <button onClick={(event) => dispatch({ type: 'DELETE_WORKOUT', payload: lift.id })}>Delete Workout From History</button> 
        </div>
        </>
        
        
        
        
        
      ))}
      </main>
    </section>
    
  );
}
export default WorkoutHistory;
