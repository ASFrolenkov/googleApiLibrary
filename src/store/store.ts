import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { googleLibApi } from "../services/bookService"
import fetchReducer  from './reducers/fetchSlice'
import stateReducer from './reducers/stateSlice'

//rootReducer для масштабируемости редюсеров
const rootReducer = combineReducers({
    [googleLibApi.reducerPath]: googleLibApi.reducer,
    fetchReducer,
    stateReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        //полчуение middleware подключеные по дефолту (Redux Thunk(для асинхронных запросов))
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(googleLibApi.middleware)
    })
}

export type TRootReducer = ReturnType<typeof rootReducer>;
export type TStore = ReturnType<typeof setupStore>;
export type StoreDispatch = TStore['dispatch'];