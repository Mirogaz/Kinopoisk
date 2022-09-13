import paginationReducer from './reducer/PaginationSlice';
import cinemaReducer from './reducer/CinemaSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    cinemaReducer,
    paginationReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']