import { combineReducers } from 'redux';
import { controlsReducer } from './controls/controls-reducer';
import { countriesReducer } from './countries/countries-reducer';
import { detailsReducer } from './details/details-reducer';
import { themeReducer } from './theme/theme-reducer';

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
    details: detailsReducer,
    controls: controlsReducer
});