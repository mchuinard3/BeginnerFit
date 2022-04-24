import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function EditWorkout({ lift }) {

    const [editMode, setEditMode] = useState(false);
    const editWorkout = useSelector(store => store.editWorkoutReducer);
    const dispatch = useDispatch();

    const handleEdit = () => {
        console.log('clicked', lift);
        setEditMode(!editMode);
        dispatch({ type: 'SET_EDIT_WORKOUT', payload: lift });
    }

    const handleChange = (event, property) => {
        dispatch({
            type: 'EDIT_ON_CHANGE',
            payload: {
                property: property,
                value: event.target.value
            }
        })
    }

    const handleSave = () => {
        dispatch({ type: 'EDIT_WORKOUT', payload: editWorkout });
        setEditMode(!editMode);
    }

    return (

        <>
            <div><h4>___________________________________________</h4></div>
            <div> <h1>User ID: {lift.user_id} </h1></div>


            <div> <h3>Workout Name: {lift.workout_name} </h3></div>


            <div> <h4>Exercise 1: {lift.exercise_1} </h4></div>


            <div>  <div>{editMode ?
                <div>
                    <input
                        type="text"
                        value={editWorkout.weight_used_1}
                        onChange={(event) => handleChange(event, 'weight_used_1')} />
                </div>
                :
                <div>
                    <h4>Weight Used: {lift.weight_used_1} </h4>
                </div>}
            </div> </div>

            <div>
                <h4>Exercise 2: {lift.exercise_2} </h4>
            </div>
            <div>  <div>{editMode ?
                <div>
                    <input
                        type="text"
                        value={editWorkout.weight_used_2}
                        onChange={(event) => handleChange(event, 'weight_used_2')} />
                </div>
                :
                <div>
                    <h4>Weight Used: {lift.weight_used_2} </h4>
                </div>}  </div> </div>
            <div>
                <h4>Exercise 3: {lift.exercise_3} </h4>
            </div>
            <div>  <div>{editMode ?
                <div>
                    <input
                        type="text"
                        value={editWorkout.weight_used_3}
                        onChange={(event) => handleChange(event, 'weight_used_3')} />
                </div>
                :
                <div>
                    <h4>Weight Used: {lift.weight_used_3} </h4>
                </div>}   </div> </div>
            <div>
                <h4>Exercise 4: {lift.exercise_4}</h4>
            </div>
            <div>  <div>{editMode ?
                <div>
                    <input
                        type="text"
                        value={editWorkout.weight_used_4}
                        onChange={(event) => handleChange(event, 'weight_used_4')} />
                </div>
                :
                <div>
                    <h4>Weight Used: {lift.weight_used_4} </h4>
                </div>}   </div> </div>


            <div> <h4>Date of Workout Completion: {lift.date}</h4>
                <button onClick={(event) => dispatch({ type: 'DELETE_WORKOUT', payload: lift.id })}>Delete Workout From History</button>
                {editMode ? <button onClick={handleSave}>Save Edit</button> : <button onClick={handleEdit}> Edit Weight Used</button>}
            </div>
            <div><h4>___________________________________________</h4></div>
        </>
    )
}

export default EditWorkout;


