import React from 'react';
import { mount } from 'enzyme';
import ClientCreate from '../client/ClientCreate';
import Root from '../../Root';

let wrapper;
beforeEach(() => {
    wrapper = mount(
        <Root>
            <ClientCreate/>
        </Root>
    )
});

it('renders without crashing',() => {
    expect(wrapper.length).toEqual(1);
    // console.log(wrapper.debug());
});

it('has a 3 textfields and 1 button', () => {
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(3);
});

it('starts with an empty textfield', () => {
    expect(wrapper.find('input').at(0).props().value).toEqual('');
    expect(wrapper.find('input').at(1).props().value).toEqual('');
    expect(wrapper.find('input').at(2).props().value).toEqual('');
});

// TODO: Tests for submission? maybe thats part of integration testing?

