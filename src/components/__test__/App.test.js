import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('App renders without crashing',() => {
    const wrapper = shallow(<App/>)
    expect(wrapper.length).toEqual(1);
    // console.log(wrapper.debug());
});

// Then maybe check if the component renders Client Status and Etc
