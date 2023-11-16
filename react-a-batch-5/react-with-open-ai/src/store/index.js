import { configureStore, combineReducers } from "@reduxjs/toolkit";

import responseAI from "./features/responseAISlice";

const reducer = combineReducers({
	responseAI,
});

const store = configureStore({
	reducer,
});

export default store;
