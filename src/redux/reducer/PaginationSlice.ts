import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPagination {
    page: number;
}

const initialState: IPagination = {
    page: 1,
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        openNextPage(state): void {
            console.log(state.page)
            state.page = state.page + 1
        },
        openLastPage(state): void {
            state.page--
        }
    }
})

export default paginationSlice.reducer