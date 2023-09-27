import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

import persistStore from "redux-persist/lib/persistStore";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

import cart from "./cart";
import tasks from "./tasks";
import theme from "./theme";

const rootReducers = combineReducers({
	cart,
	tasks,
	theme,
});

const persistConfig = { key: "root", storage, backlist: ["task"] };

const pReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
	reducer: pReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		});
	},
});

const persistor = persistStore(store);

export { persistor };
export default store;
