import { React, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

/*
This component contains buttons labeled with
each of the different workout options for 
the user to choose from. Once the button 
is clicked on, it will take the user to
the WorkoutType page, and display the specific
workout.
*/
function SelectFromWorkouts() {

  const MySwal = withReactContent(Swal);

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'GET_WORKOUT' });
  }, []);

  const workout = useSelector(store => store.workoutReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleWorkout = (id) => {
    dispatch({ type: 'GET_SINGLE_WORKOUT', payload: id });
    history.push(`/workoutType/${id}`);
    MySwal.fire(`Have a good workout ${user.username}!`);

  }

  return (

    <div className="center">

      <Col
        style={{ fontSize: 25, padding: 4 }}>Welcome, {user.username}!
      </Col>
      <Col
        style={{ fontSize: 25, padding: 4 }}>Your ID is: {user.id}
      </Col>
      <Col
        style={{ fontSize: 25, padding: 4 }}>Select From Workouts
      </Col>

      <ul>
        {workout.map((exercise, i) => {
          return (
            <ButtonGroup
              aria-label="Basic example">
              <Button
                variant="light"
                className="rounded-pill"
                size="md"
                style={{ padding: 5, margin: 15, width: 180, height: 40 }}
                key={i} onClick={(event) => handleWorkout(exercise.id)}>{exercise.workout_name}   </Button>
            </ButtonGroup>);
        })}
      </ul>
      <LogOutButton
        className="btn" />
    </div>
  );
}

export default SelectFromWorkouts;
