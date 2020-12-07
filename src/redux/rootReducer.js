import {combineReducers} from "redux"
import userReducer from "./user/userReducer"
import arrayReducer from "./posts/ArrayReducer"

const rootReducer=combineReducers({
    user: userReducer,
    posts: arrayReducer
})

export default rootReducer