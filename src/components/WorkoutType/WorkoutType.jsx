import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectFromWorkouts from '../SelectFromWorkouts/SelectFromWorkouts';
import ReactPlayer from 'react-player';
import DatePicker from 'react-date-picker';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';


function WorkoutType() {


  // const [value, onChange] = useState(new Date());
  const [value, setDate] = useState('');
  const history = useHistory();

  const [weightOne, setWeightOne] = useState(0);
  const [weightTwo, setWeightTwo] = useState(0);
  const [weightThree, setWeightThree] = useState(0);
  const [weightFour, setWeightFour] = useState(0);

  const addWorkout = (event) => {
    event.preventDefault();
    dispatch({
      type: 'POST_WEIGHT_HISTORY',
      payload: {
          date: value,
          // exercises_id: exercises_id, // idk where your exercise id is
          weight_used_1: weightOne,
          weight_used_2: weightTwo,
          weight_used_3: weightThree,
          weight_used_4: weightFour
          // ... you get the point
      }
      
  })
  history.push('/workoutHistory')
  }



  const user = useSelector((store) => store.user);

  const handleExerciseBtn1 = () => {
    swal(`Great work ${user.username}! On to Exercise 2!`);
    history.push('/workoutType');
  }

  const handleExerciseBtn2 = () => {
    swal(`You're crushing it ${user.username}! On to Exercise 3!`);

  }

  const handleExerciseBtn3 = () => {
    swal(`Almost done ${user.username}! On to Exercise 4!`);

  }

  const handleExerciseBtn4 = () => {
    swal(`Way to get it done ${user.username}! Click the I'm done button if your workout is complete!`);

  }

  useEffect(() => {
    dispatch({ type: 'GET_WORKOUT' });
  }, []);

  const singleWorkout = useSelector(store => store.singleWorkoutReducer);

  const dispatch = useDispatch();
  // const workout = useSelector(store => store.workoutReducer);
  console.log('workout:', singleWorkout);

  return (
    <main>




      <h2>{singleWorkout.workout_name}</h2>
      <div> <h3>Exercise 1: </h3>
        <h3>{singleWorkout.exercise_1}</h3>
        <ReactPlayer url={singleWorkout.video_1} />
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed: <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" onChange={(event) => setWeightOne(event.target.value)} /> </h3>
        <h3>Click Completed Button When Done With Exercise:</h3>
        <h3><button onClick={handleExerciseBtn1}>Exercise 1 Completed</button></h3> </div>

      <div> <h3>Exercise 2: </h3>
        <h3>{singleWorkout.exercise_2}</h3>
        <ReactPlayer url={singleWorkout.video_2} />
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed: <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" onChange={(event) => setWeightTwo(event.target.value)} /> </h3>
        <h3>Click Completed Button When Done With Exercise:</h3>
        <h3><button onClick={handleExerciseBtn2}>Exercise 2 Completed</button></h3> </div>

      <div> <h3>Exercise 3: </h3>
        <h3>{singleWorkout.exercise_3}</h3>
        <ReactPlayer url={singleWorkout.video_3} />
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed: <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" onChange={(event) => setWeightThree(event.target.value)} /> </h3>
        <h3>Click Completed Button When Done With Exercise:</h3>
        <h3><button onClick={handleExerciseBtn3}> Exercise 3 Completed</button></h3> </div>

      <div> <h3>Exercise 4: </h3>
        <h3>{singleWorkout.exercise_4}</h3>
        <ReactPlayer url={singleWorkout.video_4} />
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed: <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" onChange={(event) => setWeightFour(event.target.value)} /> </h3>
        <h3>Click Completed Button When Done With Exercise:</h3>
        <h3><button onClick={handleExerciseBtn4}>Exercise 4 Completed</button></h3> </div>
        <h3>Enter Workout Date:</h3>
        <div>
          {/* <DatePicker onChange={(event) => onChange(event.target.value)} /> */}
          <input type="date" onChange={(event) => setDate(event.target.value)} /> 
        </div>
        <h3>Click I'm Done Button When Entire Workout is Complete:</h3>
       
        <button onClick={addWorkout}>I'm Done</button>

    </main>


  )
}




export default WorkoutType;


