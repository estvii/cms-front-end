import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import ClientStatus from './../client/ClientStatus';
import ClientStatusToggle from './../client/ClientStatusToggle';
import ClientNotesForm from './../client/ClientNotesForm';
import ClientCreateForm from './../client/ClientCreateForm';
import ClientDeleteModal from './../client/ClientDelete';

// Test that client status component renders when you click on it

let wrapper;

describe('client status renders without passing initial state', () => {
    beforeEach(() => {
        wrapper = mount(
            <Root>
                <ClientStatus/>
            </Root>
        )
    });
    it('renders without initial state without crashing' ,() => {
        expect(wrapper.length).toEqual(1);
    });
});

describe('client status renders with initial state', () => {
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
        wrapper = mount(
            <Root initialState={initialState} >
                <ClientStatus />
            </Root>
        )
    });

    it('renders without crashing',() => {
        expect(wrapper.length).toEqual(1);
    });
    
    it('renders the client status component with client #1', () => {
        expect(wrapper.render().text()).toContain("client#1");
    });

    it('renders child component, 2 Client Status Toggles',() => {
        expect(wrapper.find(ClientStatusToggle).length).toEqual(2);
        expect(wrapper.find(ClientCreateForm).length).toEqual(1);
        expect(wrapper.find(ClientDeleteModal).length).toEqual(1);
        expect(wrapper.find(ClientNotesForm).length).toEqual(1);
    });
});







