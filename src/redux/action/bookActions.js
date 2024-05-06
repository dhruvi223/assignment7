import { ActionTypes } from "../constants/action-types";
import bcrypt from 'bcryptjs';
import toast from "react-hot-toast";
import axios from "axios";

export const fetchbooks = (setBooks) => {
    return async (dispatch) => {
        dispatch({ type: ActionTypes.FETCHBOOK });
        axios.get("https://freetestapi.com/api/v1/books")
        .then( data => setBooks(data.data))
        .catch(error => console.log(error));
    }
}
