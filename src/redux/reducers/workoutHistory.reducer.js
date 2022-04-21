const workoutHistoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_WORKOUT_HISTORY':
            return action.payload;
        default:
            return state;
    }
};

export default workoutHistoryReducer;