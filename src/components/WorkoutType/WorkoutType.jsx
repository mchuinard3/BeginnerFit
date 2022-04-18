import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function WorkoutType() {

  useEffect(() => {
    dispatch({ type: 'GET_WORKOUT' });
  }, []);

  const dispatch = useDispatch();
  const workout = useSelector(store => store.workoutReducer);
  console.log('workout:', workout);

  return (
    <main>
      <h1>Workout Type</h1>
      <section className="workout">
        {workout.map(exercise => {
          return (
            <div key={exercise.id} >
              <h3>Workout Name: {exercise.workout_name}</h3>
              {/* <p>AMOUNT: {product.amount}{product.amount_type}</p>
                <p>TYPE: {product.type}</p>
                <p>PAR: {product.par}</p>
                <p>EXPECTED AMOUNT: {product.expected_amount}</p> */}
            </div>
          );
        })}
      </section>
    </main>
  )
}




export default WorkoutType;
