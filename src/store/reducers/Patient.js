import { ADD_PATIENT,SET_PATIENTS  } from "../actions/Patient";

const initialState = {
    patients: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PATIENTS:
            return {
                ...state,
                patients: action.patients
            }
        case ADD_PATIENT:
            const newPatient = action.patientData;
            return {
                ...state,
                patients: state.patients.concat(newPatient)
            }
        default:
            return state;
    }
}

export default reducer;