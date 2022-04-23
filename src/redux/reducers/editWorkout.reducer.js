const editWorkoutReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_WORKOUT':
            return action.payload;
        case 'EDIT_ON_CHANGE':
            return {
                ...state,
                [action.payload.property]: action.payload.value

            };
        case 'CLEAR_EDIT_WORKOUT':
            return {};

        default:
            return state;
    }
};

export default editWorkoutReducer;