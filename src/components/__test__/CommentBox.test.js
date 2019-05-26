import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from 'enzyme'; //full dom rendering
import Root from "../../Root";



let wrapped;
beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox/>
        </Root>        
    );
})
afterEach(() => {
    wrapped.unmount();
})
it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
})
describe('the text area', () => {
    beforeEach(() => {
        //先对textarea输入
        wrapped.find('textarea').simulate('change',{//simulate input in textarea.
            target: {
                value: 'a new comment'
            }
        })
        wrapped.update();//Forces a re-render
    })
    
    it('has a text area that users can type in', () => {
        expect(wrapped.find('textarea').props().value).toEqual('a new comment');
    }) 
    
    it('When the input is submitted, textarea shold get emptied', () => {
        //再测试submit
        wrapped.find('textarea').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').props().value).toEqual('');
    }) 
})
