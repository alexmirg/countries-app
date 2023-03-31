import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectControls } from "../controls/controls-slice";
import { loadCountries, selectCountriesInfo, selectVisibleCountries } from "./countries-slice";

export const useCountries = () => {
    const dispatch = useDispatch();

    const { search, region } = useSelector(selectControls);
    const countries = useSelector(state => selectVisibleCountries(state, { search, region }));
    const { status, error, qty } = useSelector(selectCountriesInfo);

    useEffect(() => {
        if (!qty) {
        dispatch(loadCountries())
        }
    }, [qty, dispatch]);

    return [countries, { status, error, qty }];
}