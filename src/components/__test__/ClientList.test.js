import React from 'react';
import { mount, shallow } from 'enzyme';
import ClientList from './../client/ClientList'
import ClientListTable from './../client/ClientListTable';
import Root from '../../Root';

let wrapper;

describe('Client List (Parent)', () => {
    beforeEach(() => {
        wrapper = mount(
            <Root>
                <ClientList/>
            </Root>
        )
    })

    it('renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('has the child component', () => {
        expect(wrapper.find(ClientListTable).length).toEqual(1);
    });

}) 


describe('client list table (child) component', () => {
    beforeEach(() => {
        const clientList =
                [{
                    name: 'client#1',
                    email: 'client1@client.com',
                    password: 'client1',
                    _id: 1
                },
                {
                    name: 'client#2',
                    email: 'client2@client.com',
                    password: 'client2',
                    _id: 2
                },
                {   
                    name: 'client#3',
                    email: 'client3@client.com',
                    password: 'client3',
                    _id: 3
                }]; 
            
        wrapper = mount(
            <Root>
                <ClientListTable clientList={clientList} />
            </Root>
        )
    });

    it('renders without crashing',() => {
        expect(wrapper.length).toEqual(1);
    });

    it('creates two buttons per client', () => {
        // console.log(wrapper.debug())
        expect(wrapper.find('button').length).toEqual(6);
    })

    it('shows the name of each client', () => {
        expect(wrapper.render().text()).toContain('client#1');
        expect(wrapper.render().text()).toContain('client#2');
        expect(wrapper.render().text()).toContain('client#3');
    });
});