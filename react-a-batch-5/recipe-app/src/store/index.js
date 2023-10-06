import { combineReducers, configureStore } from "@reduxjs/toolkit";

import persistStore from "redux-persist/lib/persistStore";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

const rootReducers = combineReducers({});

const pReducer = persistReducer(
	{
		key: "root",
		storage,
		blacklist: [],
	},
	rootReducers
);

const store = configureStore({
	reducer: pReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			serializableCheck: false,
		});
	},
});

const persistor = persistStore(store);

export { persistor };
export default store;
