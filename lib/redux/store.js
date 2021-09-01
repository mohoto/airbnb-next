import { createStore ,combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import authSlice from "./reducers/authSlice";
import {composeWithDevTools} from 'redux-devtools-extension';
import searchSlice from "./reducers/searchSlice";

const rootReducer = combineReducers({
    search: searchSlice,
    auth: authSlice
})


const persistConfig = {
    key: 'root',
    storage,
    //whitelist: ['products, cart'] // only navigation will be persisted
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
//const store = createStore(persistedReducer);

const store = createStore(persistedReducer, composeWithDevTools());

let persistor = persistStore(store); 

export {store, persistor};