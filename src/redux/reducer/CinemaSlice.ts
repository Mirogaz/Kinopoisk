import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICinema } from "../../types/ICinema";

interface CinemaState {
    cinema: ICinema[];
    isLoading: boolean;
    error: string;
}

const initialState: CinemaState = {
    cinema: [],
    isLoading: false,
    error: ''
}

export const cinemaSlice = createSlice({
    name: 'cinema',
    initialState,
    reducers: {
        getCinemaList(state): void {
            state.isLoading = true;
        },
        cinemaSuccess(state,action: PayloadAction<ICinema[]>) {
            state.isLoading = false;
            state.error = '';
            state.cinema = action.payload;
        },
        cinemaError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default cinemaSlice.reducer