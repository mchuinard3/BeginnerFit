import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button, Container, Row, Col } from 'react-bootstrap';

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
            {/* <div><h4>___________________________________________</h4></div> */}
            <Table className="align" variant="dark" bordered size="md">   <h5><th>User ID: {lift.user_id}  </th></h5>
               

                    <h5><th>Workout Name: {lift.workout_name} </th></h5>


                 <h5><th>Exercise 1: {lift.exercise_1} </th></h5>


                  <div>{editMode ?
                    <div>
                        <input
                            type="text"
                            value={editWorkout.weight_used_1}
                            onChange={(event) => handleChange(event, 'weight_used_1')} />
                    </div>
                    :
                    
                        <h5><th>Weight Used: {lift.weight_used_1} </th></h5>
                    }
                </div> 

               
                <h5><th>Exercise 2: {lift.exercise_2} </th></h5>
                
                  <div>{editMode ?
                    <div>
                        <input
                            type="text"
                            value={editWorkout.weight_used_2}
                            onChange={(event) => handleChange(event, 'weight_used_2')} />
                    </div>
                    :
                    <div>
                        <h5><th>Weight Used: {lift.weight_used_2} </th></h5>
                    </div>}  </div> 
                <div>
                <h5><th>Exercise 3: {lift.exercise_3} </th></h5>
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
                        <h5><th>Weight Used: {lift.weight_used_3} </th></h5>
                    </div>}   </div> </div>
                <div>
                <h5><th>Exercise 4: {lift.exercise_4}</th></h5>
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
                       <h5><th>Weight Used: {lift.weight_used_4} </th></h5>
                    </div>}   </div> </div>


                <div> <h6><th>Date of Workout Completion: {lift.date}</th></h6>

                </div>
                {/* <div><h4>___________________________________________</h4></div> */}
            </Table>
            <ButtonGroup aria-label="Basic example"> <Button variant="danger" className="rounded-pill" size="md" style={{ padding: 5, margin: 0 }} onClick={(event) => dispatch({ type: 'DELETE_WORKOUT', payload: lift.id })}>Delete Workout From History</Button></ButtonGroup>
            {editMode ? <ButtonGroup aria-label="Basic example"> <Button variant="primary" className="rounded-pill" size="md" style={{ padding: 5, margin: 7 }} onClick={handleSave}>Save Edit</Button></ButtonGroup> : <ButtonGroup aria-label="Basic example"> <Button variant="primary" className="rounded-pill" size="md" style={{ padding: 5, margin: 7 }} onClick={handleEdit}> Edit Weight Used</Button></ButtonGroup>}
        </>

    )
}

export default EditWorkout;


