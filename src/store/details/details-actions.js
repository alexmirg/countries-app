export const SET_LOADING = 'details/SET_LOADING';
export const SET_ERROR = 'details/SET_ERROR';
export const SET_COUNTRY = 'details/SET_COUNTRY';
export const CLEAR_DETAILS = 'details/CLEAR_DETAILS';
export const SET_NEIGHBORS = 'details/SET_NEIGHBORS';

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

const setNeighbors = (countries) => ({
    type: SET_NEIGHBORS,
    payload: countries
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

export const loadNeighborsByBorder = (border) => (dispatch, getState, { client, api }) => {
    client.get(api.filterByCode(border))
        .then(({data}) => dispatch(setNeighbors(data.map((c) => c.name))))
        .catch(err => console.error(err));
}