import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function EditWorkout({ lift }) {

    const [editWeight1, setEditWeight1] = useState(false);
    const [editWeight2, setEditWeight2] = useState(false);
    const [editWeight3, setEditWeight3] = useState(false);
    const [editWeight4, setEditWeight4] = useState(false);

    const handleWeight1 = (addId) => {
        console.log('clicked');
        setEditWeight1(true);
        setWorkoutId(addId)
    }

    const handleWeight2 = (addId) => {
        console.log('clicked');
        setEditWeight2(true);
        setWorkoutId(addId)
    }

    const handleWeight3 = (addId) => {
        console.log('clicked');
        setEditWeight3(true);
        setWorkoutId(addId)
    }

    const handleWeight4 = (addId) => {
        console.log('clicked');
        setEditWeight4(true);
        setWorkoutId(addId)
    }

    const workoutHistory = useSelector(store => store.workoutHistoryReducer);
    const dispatch = useDispatch();

    const [weight1, setWeight1] = useState(lift.weight_used_1);
    const [weight2, setWeight2] = useState(lift.weight_used_2);
    const [weight3, setWeight3] = useState(lift.weight_used_3);
    const [weight4, setWeight4] = useState(lift.weight_used_4);
    const [workoutId, setWorkoutId] = useState(0);

    const editedWeights = {
        weight_used_1: weight1,
        weight_used_2: weight2,
        weight_used_3: weight3,
        weight_used_4: weight4,
        id: workoutId
    }

    useEffect(() => {
        dispatch({ type: 'GET_WORKOUT_HISTORY' });
    }, []);

    const handleSave = () => {
        dispatch({ type: 'EDIT_WORKOUT', payload: editedWeights });

        setEditWeight1(false);
        setEditWeight2(false);
        setEditWeight3(false);
        setEditWeight4(false);
    }

    return (

        <>
            <div> <h1>User ID: {lift.user_id} </h1></div>
            <div> <h3>Workout Name: {lift.workout_name} </h3></div>
            <div> <h4>Exercise 1: {lift.exercise_1} </h4></div>
            <div>  <div>{editWeight1 ? <div><input type="text" onChange={(event) => setWeight1(event.target.value)} /> <button onClick={handleSave}>Save Edit</button></div> : <div><h4>Weight Used: {lift.weight_used_1} </h4> <button onClick={() => handleWeight1(lift.id)}> Edit Weight Used</button></div>}   </div> </div>
            <div> <h4>Exercise 2: {lift.exercise_2} </h4></div>
            <div>  <div>{editWeight2 ? <div><input type="text" onChange={(event) => setWeight2(event.target.value)} /> <button onClick={handleSave}>Save Edit</button></div> : <div><h4>Weight Used: {lift.weight_used_2} </h4> <button onClick={() => handleWeight2(lift.id)}> Edit Weight Used</button></div>}   </div> </div>
            <div> <h4>Exercise 3: {lift.exercise_3} </h4></div>
            <div>  <div>{editWeight3 ? <div><input type="text" onChange={(event) => setWeight3(event.target.value)} /> <button onClick={handleSave}>Save Edit</button></div> : <div><h4>Weight Used: {lift.weight_used_3} </h4> <button onClick={() => handleWeight3(lift.id)}> Edit Weight Used</button></div>}   </div> </div>
            <div> <h4>Exercise 4: {lift.exercise_4}</h4></div>
            <div>  <div>{editWeight4 ? <div><input type="text" onChange={(event) => setWeight4(event.target.value)} /> <button onClick={handleSave}>Save Edit</button></div> : <div><h4>Weight Used: {lift.weight_used_4} </h4> <button onClick={() => handleWeight4(lift.id)}> Edit Weight Used</button></div>}   </div> </div>
            <div> <h4>Date of Workout Completion: {lift.date}</h4>
                <button onClick={(event) => dispatch({ type: 'DELETE_WORKOUT', payload: lift.id })}>Delete Workout From History</button>
            </div>
        </>
    )
}

export default EditWorkout;


