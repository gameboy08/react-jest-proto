import React from 'react';
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";

//whole goal is to confirm that our application can react out to that json API and fetch a list of comments by itself
it('can fetch a list of comments and display them', () => {
    //Attempt to render the *entire* app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )
    //find the 'fetchComments' button and click it

    //Expect to find a list of comments!

})