import React from 'react';
import { mount } from "enzyme";
import Root from "Root";
import CommentList from '../CommentList';

let wrapped;
beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    }
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    )
})

it('creates on LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
})

it('shows the text for each comment', () => {
    //wrapped.render() return cheerio object
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
})