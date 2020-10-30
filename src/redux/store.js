import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";


import rootReducer from "./root-reducer.js";

let middleware = [logger];

export let store = createStore(rootReducer, applyMiddleware(...middleware));

export let persistor = persistStore(store);

export default { store, persistor };
