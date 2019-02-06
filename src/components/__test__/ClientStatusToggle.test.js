import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import ClientStatusToggle from './../client/ClientStatusToggle';
import Switch from 'react-switch';

let wrapper;
describe('account status toggle button', () => {
    const initialState = {
        selectedClient:    
        {
            _id: '1'
        },
        clients: 
        {
            '1': { 
                    name: 'client#1', 
                    email: 'client1@client.com', 
                    password: 'client1', 
                    verification_status: true, 
                    account_status: false, 
                    server_status: false, 
                    _id: '1'
                }
        }    
    }

    beforeEach(() => {
        wrapper = mount (
            <Root initialState={initialState}>
                <ClientStatusToggle status_type="account status"/>
            </Root>
        )
    });

    it('renders correctly with NPM package react-switch',() => {
        expect(wrapper.find(Switch).length).toEqual(1);
    });

    // it('account status toggle changes to be true onChange', () => {
    //     console.log(wrapper.find(Switch).simulate('change', {
    //         target: {checked: true}
    //     }).debug());
    //     console.log(wrapper.update().debug());

    //     // console.log(wrapper.setState({checked: true}));
    //     // wrapper.update();
    //     // console.log(wrapper.debug());

    //     // console.log(wrapper.debug());
    // });

})

describe('server status toggle button', () => {
    const initialState = {
        selectedClient:    
        {
            _id: '1'
        },
        clients: 
        {
            '1': { 
                    name: 'client#1', 
                    email: 'client1@client.com', 
                    password: 'client1', 
                    verification_status: true, 
                    account_status: true, 
                    server_status: false, 
                    _id: '1'
                }
        }    
    }

    beforeEach(() => {
        wrapper = mount (
            <Root initialState={initialState}>
                <ClientStatusToggle status_type="server status"/>
            </Root>
        )
    });

    it('renders correctly with NPM package react-switch',() => {
        // wrapper.update();
        expect(wrapper.find(Switch).length).toEqual(1);
    })
})


// TODO. add a way to simulate click or change state? or the toggle to false/true and check if the state
// matches