import { combineReducers, configureStore } from "@reduxjs/toolkit";

import persistStore from "redux-persist/lib/persistStore";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

import post from "./postSlice";
import posts from "./postsSlice";
import theme from "./themeSlice";

const rootReducers = combineReducers({
	post,
	posts,
	theme,
});

const persistConfig = { key: "root", storage, backlist: ["task"] };

const pReducer = persistReducer(persistConfig, rootReducers);

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
