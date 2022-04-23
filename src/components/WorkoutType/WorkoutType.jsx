import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

function WorkoutType() {

  const [value, setDate] = useState('');
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

  const addWorkout = (event) => {
    event.preventDefault();
    dispatch({
      type: 'POST_WEIGHT_HISTORY',
      payload: {
        date: value,
        weight_used_1: weightOne,
        weight_used_2: weightTwo,
        weight_used_3: weightThree,
        weight_used_4: weightFour,
        exercise_1: singleWorkout.exercise_1,
        exercise_2: singleWorkout.exercise_2,
        exercise_3: singleWorkout.exercise_3,
        exercise_4: singleWorkout.exercise_4,
        user_id: user.id
      }
    })
    history.push(`/workoutHistory`)
    swal(`Way to get it done ${user.username}, check out your workout history!`);

  }

  return (
    <main>
      <h2>{singleWorkout.workout_name}</h2>
      <div> <h3>Exercise 1: </h3>
        <h3>{singleWorkout.exercise_1}</h3>
        <ReactPlayer url={singleWorkout.video_1} />
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed: <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" onChange={(event) => setWeightOne(event.target.value)} /> </h3>
      </div>

      <div> <h3>Exercise 2: </h3>
        <h3>{singleWorkout.exercise_2}</h3>
        <ReactPlayer url={singleWorkout.video_2} />
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed: <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" onChange={(event) => setWeightTwo(event.target.value)} /> </h3>
      </div>

      <div> <h3>Exercise 3: </h3>
        <h3>{singleWorkout.exercise_3}</h3>
        <ReactPlayer url={singleWorkout.video_3} />
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed: <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" onChange={(event) => setWeightThree(event.target.value)} /> </h3>
      </div>

      <div> <h3>Exercise 4: </h3>
        <h3>{singleWorkout.exercise_4}</h3>
        <ReactPlayer url={singleWorkout.video_4} />
        <h3> Complete 4 Sets of 10 Reps </h3>
        <h3>Sets Completed: <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /> <input type="checkbox" /></h3>
        <h3>Weight Used:<input type="text" onChange={(event) => setWeightFour(event.target.value)} /> </h3>
      </div>
      <h3>Enter Workout Date:</h3>
      <div>
        <input type="date" onChange={(event) => setDate(event.target.value)} />
      </div>
      <h3>Click I'm Done Button When Entire Workout is Complete:</h3>
      <button onClick={addWorkout}>I'm Done</button>
    </main>
  )
}

export default WorkoutType;


