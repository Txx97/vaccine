import { ADD_VACCINE, SET_VACCINES } from "../actions/Vaccine";

const initialState = {
    vaccines: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VACCINES:
            return {
                ...state,
                vaccines: action.vaccines
            }
        case ADD_VACCINE:
            const newVaccine = action.vaccineData;
            return {
                ...state,
                vaccines: state.vaccines.concat(newVaccine)
            }
        default:
            return state;
    }
}

export default reducer;