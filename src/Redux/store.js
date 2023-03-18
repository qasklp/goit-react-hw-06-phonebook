import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import persistedReducer from "./root-reducer";

export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store);