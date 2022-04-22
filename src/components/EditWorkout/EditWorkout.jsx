import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectFromWorkouts from '../SelectFromWorkouts/SelectFromWorkouts';
import ReactPlayer from 'react-player';
import DatePicker from 'react-date-picker';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import WorkoutHistory from '../WorkoutHistory/WorkoutHistory';


function EditWorkout() {

  




  const history = useHistory();

  const [weightOne, setWeightOne] = useState(0);
  const [weightTwo, setWeightTwo] = useState(0);
  const [weightThree, setWeightThree] = useState(0);
  const [weightFour, setWeightFour] = useState(0);

  



  const user = useSelector((store) => store.user);

  

  useEffect(() => {
    dispatch({ type: 'GET_WORKOUT' });
  }, []);

  const singleWorkout = useSelector(store => store.singleWorkoutReducer);

  const dispatch = useDispatch();
  // const workout = useSelector(store => store.workoutReducer);
  console.log('workout:', singleWorkout);

  const addWorkout = (event) => {
    event.preventDefault();
    dispatch({
      type: 'POST_WEIGHT_HISTORY',
      payload: {
          
          
          weight_used_1: weightOne,
          weight_used_2: weightTwo,
          weight_used_3: weightThree,
          weight_used_4: weightFour,
          exercise_1: singleWorkout.exercise_1,
          exercise_2: singleWorkout.exercise_2,
          exercise_3: singleWorkout.exercise_3, 
          exercise_4: singleWorkout.exercise_4,
            
            
          
      }
      
  })
  history.push('/workoutHistory')
  swal(`Thank you ${user.username}, check out your edits!`);
  // setWeightOne({weightOne: ''}); 
  }

  return (
    <main>




      <h2>{singleWorkout.workout_name}</h2>
      <div> <h3>Exercise 1: </h3>
        <h3>{singleWorkout.exercise_1}</h3>
        
        
        
        <h3>Weight Used:<input type="text" onChange={(event) => setWeightOne(event.target.value)} /> </h3>
         </div>

      <div> <h3>Exercise 2: </h3>
        <h3>{singleWorkout.exercise_2}</h3>
        
      
        
        <h3>Weight Used:<input type="text" onChange={(event) => setWeightTwo(event.target.value)} /> </h3>
         </div>

      <div> <h3>Exercise 3: </h3>
        <h3>{singleWorkout.exercise_3}</h3>
        
       
        
        <h3>Weight Used:<input type="text" onChange={(event) => setWeightThree(event.target.value)} /> </h3>
         </div>

      <div> <h3>Exercise 4: </h3>
        <h3>{singleWorkout.exercise_4}</h3>
        
        
       
        <h3>Weight Used:<input type="text" onChange={(event) => setWeightFour(event.target.value)} /> </h3>
         </div>
        
        <div>
          
          
        </div>
        
       
        <button onClick={addWorkout}>Done Editing Weight</button>

    </main>


  )
}




export default EditWorkout;