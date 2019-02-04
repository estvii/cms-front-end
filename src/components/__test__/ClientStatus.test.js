import React from 'react';
import { mount, shallow } from 'enzyme';
import ClientList from './../client/ClientList'
import ClientListTable from './../client/ClientListTable';
import Root from '../../Root';
import ClientStatus from './../client/ClientStatus';

// Test that client status component renders when you click on it

let wrapper;
beforeEach(() => {
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
                    server_status: true, 
                    _id: '1'
                }
        }
            
        
    }
// Retrieve Client function in Client Status (Line 26) isnt passing getting client List correctly,
//Maybe im not passing the initialState of client list correctly to client status component
    wrapper = mount(
        <Root initialState={initialState} >
            <ClientStatus />
        </Root>
    )
});

it('renders without crashing',() => {
    // wrapper.update();
    console.log(wrapper.debug());
    expect(wrapper.length).toEqual(1);
});

it('renders the client status component', () => {
    // expect(wrapper.find(".zzyx").simulate('click'));
    // console.log(wrapper.debug());
    // console.log(wrapper.find("[__test__='client-select-button']").at(0).simulate('click').debug());
    
})

