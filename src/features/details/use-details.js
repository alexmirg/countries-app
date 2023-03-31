import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearDetails, loadCountryByName, selectDetails } from "./details-slice";

export const useDetails = (name) => {
    const dispatch = useDispatch();
    const details = useSelector(selectDetails);

    useEffect(() => {
        dispatch(loadCountryByName(name));
        return () => {
            dispatch(clearDetails());
        }
    }, [dispatch, name]);

    return details;
}