import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectFromWorkouts from '../SelectFromWorkouts/SelectFromWorkouts';
import ReactPlayer from 'react-player';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function WorkoutType() {

  const user = useSelector((store) => store.user);

  const handleExerciseBtn1 = () => {
    alert(`Great work ${user.username}! On to Exercise 2!`);

  }

  const handleExerciseBtn2 = () => {
    alert(`You're crushing it ${user.username}! On to Exercise 3!`);

  }

  const handleExerciseBtn3 = () => {
    alert(`Almost done ${user.username}! On to Exercise 4!`);

  }

  const handleExerciseBtn4 = () => {
    alert(`Way to get it done ${user.username}! Click the I'm done button if your workout is complete!`);

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
        <h3>Weight Used:<input type="text" /> </h3>
        <h3>Click Completed Button When Done With Exercise:</h3>
        <h3><button onClick={handleExerciseBtn1}>Exercise 1 Completed</button></h3> </div>

      <div> <h3>Exercise 2: </h3>
        <h3>{singleWorkout.exercise_2}</h3>
        <ReactPlayer url={singleWorkout.video_2} />
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed: <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" /> </h3>
        <h3>Click Completed Button When Done With Exercise:</h3>
        <h3><button onClick={handleExerciseBtn2}>Exercise 2 Completed</button></h3> </div>

      <div> <h3>Exercise 3: </h3>
        <h3>{singleWorkout.exercise_3}</h3>
        <ReactPlayer url={singleWorkout.video_3} />
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed: <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" /> </h3>
        <h3>Click Completed Button When Done With Exercise:</h3>
        <h3><button onClick={handleExerciseBtn3}> Exercise 3 Completed</button></h3> </div>

      <div> <h3>Exercise 4: </h3>
        <h3>{singleWorkout.exercise_4}</h3>
        <ReactPlayer url={singleWorkout.video_4} />
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed: <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" /> </h3>
        <h3>Click Completed Button When Done With Exercise:</h3>
        <h3><button onClick={handleExerciseBtn4}>Exercise 4 Completed</button></h3> </div>
        <h3>Click I'm Done Button When Entire Workout is Complete:</h3>
        <button>I'm Done</button>

    </main>


  )
}




export default WorkoutType;
