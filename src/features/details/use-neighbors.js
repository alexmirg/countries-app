import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadNeighborsByBorder, selectNeighbors } from "./details-slice";

export const useNeighbors = (borders = []) => {
    const dispatch = useDispatch();
    const neighbors = useSelector(selectNeighbors);

    useEffect(() => {
        if (borders.length) {
            dispatch(loadNeighborsByBorder(borders));
        }
    }, [dispatch, borders]);

    return neighbors;
}