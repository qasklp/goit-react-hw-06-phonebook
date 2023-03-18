import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import conatctsReducer from "./Contacts/contacts-slice";
import filterReducer from "./Filter/filter-slice";

const persistConfig = {
    key: "root",
    storage
} 

const rootReducer = combineReducers({
    contacts: conatctsReducer,
    filter: filterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;