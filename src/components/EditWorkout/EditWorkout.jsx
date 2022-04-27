import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import moment from 'moment';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

/*
This component contains the user workout 
history table.
*/
function EditWorkout({ lift }) {

    const data = [
        {
            exercise: lift.exercise_1,
            weight: Number(lift.weight_used_1)
        },
        {
            exercise: lift.exercise_2,
            weight: Number(lift.weight_used_2)
        },
        {
            exercise: lift.exercise_3,
            weight: Number(lift.weight_used_3)
        },
        {
            exercise: lift.exercise_4,
            weight: Number(lift.weight_used_4)
        },
    ];

    const day = moment(lift.date).format("dddd, MMMM Do YYYY");

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

            <h5 className="centerTitle">Workout History Table</h5>
            <Table variant="dark" size="lg" padding="sm" className="alignTable">
                <thead>
                    <tr >
                        <th width="170">User ID</th>
                        <th width="170">Workout Name</th>
                        <th width="170">Exercise 1</th>
                        <th width="170">Weight Used</th>
                        <th width="170">Exercise 2</th>
                        <th width="170">Weight Used</th>
                        <th width="170">Exercise 3</th>
                        <th width="170">Weight Used</th>
                        <th width="170">Exercise 4</th>
                        <th width="170">Weight Used</th>
                        <th width="170">Date of Workout Completion</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{lift.user_id}</td>
                        <td>{lift.workout_name}</td>
                        <td>{lift.exercise_1}</td>
                        <td>{editMode ?

                            <input
                                type="text"
                                value={editWorkout.weight_used_1}
                                onChange={(event) => handleChange(event, 'weight_used_1')} />

                            :

                            <div>{lift.weight_used_1} lbs </div>
                        }</td>
                        <td>{lift.exercise_2}</td>
                        <td>{editMode ?

                            <input
                                type="text"
                                value={editWorkout.weight_used_2}
                                onChange={(event) => handleChange(event, 'weight_used_2')} />

                            :

                            <div>{lift.weight_used_2} lbs</div>
                        }</td>
                        <td>{lift.exercise_3}</td>
                        <td>{editMode ?

                            <input
                                type="text"
                                value={editWorkout.weight_used_3}
                                onChange={(event) => handleChange(event, 'weight_used_3')} />

                            :

                            <div>{lift.weight_used_3} lbs</div>
                        }</td>
                        <td>{lift.exercise_4}</td>
                        <td>{editMode ?

                            <input
                                type="text"
                                value={editWorkout.weight_used_4}
                                onChange={(event) => handleChange(event, 'weight_used_4')} />

                            :

                            <div>{lift.weight_used_4} lbs</div>
                        }</td>
                        <td>{day}</td>

                    </tr>


                </tbody>
            </Table>


            <div
                className="centerButton">
                <ButtonGroup
                    aria-label="Basic example">
                    <Button
                        variant="danger"
                        className="rounded-pill"
                        size="md"
                        style={{ padding: 5, margin: 0 }}
                        onClick={(event) => dispatch({ type: 'DELETE_WORKOUT', payload: lift.id })}>Delete Workout
                    </Button>
                </ButtonGroup>
                {editMode ?
                    <ButtonGroup
                        aria-label="Basic example">
                        <Button
                            variant="light"
                            className="rounded-pill"
                            size="md"
                            style={{ padding: 5, margin: 7 }}
                            onClick={handleSave}>Save Edits
                        </Button>
                    </ButtonGroup> :
                    <ButtonGroup
                        aria-label="Basic example">
                        <Button
                            variant="light"
                            className="rounded-pill"
                            size="md"
                            style={{ padding: 5, margin: 7 }}
                            onClick={handleEdit}> Edit Weight Used
                        </Button>
                    </ButtonGroup>}
            </div>
            <h5 className="centerChart">Weight Used Chart</h5>
            <div className="chart">

                <ResponsiveContainer width="100%" aspect={3} align="center" >
                    <LineChart data={data} >
                        <CartesianGrid />
                        <XAxis dataKey="exercise"
                            interval={'preserveStartEnd'} />
                        <YAxis></YAxis>
                        <Legend />
                        <Tooltip />
                        <Line dataKey="weight"
                            stroke="#4169e1" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>




        </>

    )
}

export default EditWorkout;

