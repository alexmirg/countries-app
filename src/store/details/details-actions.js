export const SET_LOADING = 'details/SET_LOADING';
export const SET_ERROR = 'details/SET_ERROR';
export const SET_COUNTRY = 'details/SET_COUNTRY';
export const CLEAR_DETAILS = 'details/CLEAR_DETAILS';

const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country
});

const setLoading = () => ({
    type: SET_LOADING
});

const setError = (err) => ({
    type: SET_ERROR,
    payload: err
});

export const clearDetails = () => ({
    type: CLEAR_DETAILS,
});

export const loadCountryByName = (name) => (dispatch, getState, { client, api}) => {
    dispatch(setLoading());

    client.get(api.searchByCountry(name))
        .then(({data}) => dispatch(setCountry(data[0])))
        .catch(err => dispatch(setError(err.message)));
};