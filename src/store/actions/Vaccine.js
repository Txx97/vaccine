export const ADD_VACCINE = 'ADD_VACCINE';
export const SET_VACCINES = 'SET_VACCINES';

export const fetchVaccine = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`https://vaccine-fdc61-default-rtdb.asia-southeast1.firebasedatabase.app/vaccine.json`);

            if (!response.ok) {
                let message = 'Something went wrong!';
                const errResData = await response.json();
                if (errResData.error.message) {
                    message = errResData.error.message;
                }
                throw new Error();
            }

            const resData = await response.json();

            const loadedVaccine = [];
            for (const key in resData) {
                loadedVaccine.push(resData[key]);
            }

            dispatch({
                type: SET_VACCINES,
                vaccines: loadedVaccine
            })
        } catch (err) {
            throw new Error('Something went wrong');
        }
    }
}

export const addVaccine = (data) => {
    return async (dispatch, getState) => {
        if(new Date(data.dateAdministrated) > new Date()){
            throw new Error('Date Administered can not be in future');
        }
        const response = await fetch(`https://vaccine-fdc61-default-rtdb.asia-southeast1.firebasedatabase.app/vaccine.json`, {
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
            type: ADD_VACCINE,
            vaccineData: data
        });
    };
};