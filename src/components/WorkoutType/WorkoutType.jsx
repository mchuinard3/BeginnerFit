import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectFromWorkouts from '../SelectFromWorkouts/SelectFromWorkouts';
import ReactPlayer from 'react-player';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function WorkoutType() {

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
        <h3><button>Exercise Completed</button></h3> </div>

      <div> <h3>Exercise 2: </h3>
        <h3>{singleWorkout.exercise_2}</h3>
        <ReactPlayer url={singleWorkout.video_2} />
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed: <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" /> </h3>
        <h3><button>Exercise Completed</button></h3> </div>

      <div> <h3>Exercise 3: </h3>
        <h3>{singleWorkout.exercise_3}</h3>
        <ReactPlayer url={singleWorkout.video_3} />
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed: <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" /> </h3>
        <h3><button> Exercise Completed</button></h3> </div>

      <div> <h3>Exercise 4: </h3>
        <h3>{singleWorkout.exercise_4}</h3>
        <ReactPlayer url={singleWorkout.video_4} />
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed: <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" /> </h3>
        <h3><button>Exercise Completed</button></h3> </div>

    </main>


  )
}




export default WorkoutType;
