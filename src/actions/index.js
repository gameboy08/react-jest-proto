import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";
import axios from "axios";

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
   //The default export of 'redux-promise' is a middleware function. If it receives a promise, it will dispatch the resolved value of the promise. It will not dispatch anything if the promise rejects.
   const response = axios.get('http://jsonplaceholder.typicode.com/comments');
   console.log("response", response);
   return {
       type: FETCH_COMMENTS,
       payload: response
   }
}