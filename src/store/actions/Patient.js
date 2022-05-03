export const ADD_PATIENT = 'ADD_PATIENT';
export const SET_PATIENTS = 'SET_PATIENTS';

export const fetchPatient = () => {
    return async (dispatch,getState) => {
        try {
            const response = await fetch(`https://vaccine-fdc61-default-rtdb.asia-southeast1.firebasedatabase.app/patient.json`);

            if (!response.ok) {
                let message = 'Something went wrong!';
                const errResData = await response.json();
                if(errResData.error.message){
                    message=errResData.error.message;
                }
                throw new Error();
            }

            const resData = await response.json();

            const loadedPatients = [];
            for (const key in resData) {
                loadedPatients.push(resData[key]);
            }

            dispatch({
                type: SET_PATIENTS,
                patients: loadedPatients
            })
        } catch (err) {
            throw new Error('Something went wrong');
        }
    }
}

export const addPatient = (data) => {
    return async (dispatch, getState) => {
        const patientList = getState().patient.patients;
        if(patientList.find(patient => patient.fullName === data.fullName)){
            throw new Error('Patient already exists');
        }
        const response = await fetch(`https://vaccine-fdc61-default-rtdb.asia-southeast1.firebasedatabase.app/patient.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        const resData = await response.json();

        dispatch({
            type: ADD_PATIENT,
            patientData: data
        });
    };
};