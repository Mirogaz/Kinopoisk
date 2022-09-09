import { cinemaSlice } from './../redux/reducer/CinemaSlice';
import { ICinema } from './../types/ICinema';
import { AppDispatch } from './../redux/store';
import { httpClient } from "./axios";

const getCinema = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(cinemaSlice.actions.getCinemaList);
        const res = await httpClient.get<ICinema[]>('/cinema');
        dispatch(cinemaSlice.actions.cinemaSuccess(res.data));
    } catch (e: any) {
        dispatch(cinemaSlice.actions.cinemaError(e.message))
    }
}

export default getCinema