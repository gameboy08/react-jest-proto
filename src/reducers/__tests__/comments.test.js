import commentsReducer from "reducers/comments.js";
import { SAVE_COMMENT } from "actions/types";

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }
    const newState = commentsReducer([], action);//pass an action
    expect(newState).toEqual(['New Comment']);//check reducer's result
})

it('handles actions with unkown type', () => {
    const newState = commentsReducer([], { type: 'sdfafe'});
    expect(newState).toEqual([]);
})