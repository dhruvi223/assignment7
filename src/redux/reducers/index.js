import { combineReducers } from "redux";
import { Provider } from 'react-redux'
import { AuthProvider } from '../../AuthContext';
import { fetchbook } from "./bookReducer";
import { fetchonebook } from "./bookReducer";


const reducers = combineReducers({
    fetchbook : fetchbook,
    fetchonebook : fetchonebook

})

export default reducers