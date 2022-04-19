const singleWorkoutReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SINGLE_WORKOUT':
            return action.payload[0];
        default:
            return state;
    }
};

export default singleWorkoutReducer;