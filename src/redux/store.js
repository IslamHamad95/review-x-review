import {createStore, applyMiddleware} from "redux"
import arrayReducer from "./posts/ArrayReducer"
import logger from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension';

const store=createStore(arrayReducer, composeWithDevTools(applyMiddleware()))

export default store