import clientReducer from '../clientReducer';
import { 
    CREATE_CLIENT,
    FETCH_CLIENT_LIST,
    TOG_CLIENT_STATUS,
    UPDATE_CLIENT_FILTER,
    EDIT_CLIENT,
    DESTROY_CLIENT
} from '../../actions/types'

it('handles actions of CREATE_CLIENT', () => {
    const action = {
        type: CREATE_CLIENT,
        payload: {
                name: 'client#1',
                email: 'client1@client.com',
                password: 'client',
                _id: '1'
        }
    }
    const newState = clientReducer({}, action)
    expect(newState).toEqual({'1': {name: 'client#1', email: 'client1@client.com', password: 'client', _id: '1'}});
});

it('handles actions of FETCH_CLIENT_LIST',() => {
    const action ={
        type: FETCH_CLIENT_LIST,
        payload: [{
            name: 'client#1',
            email: 'client1@client.com',
            password: 'client',
            _id: '1'
        },
        {
            name: 'client#2',
            email: 'client2@client.com',
            password: 'client',
            _id: '2'
        }]
    }
    const newState = clientReducer({}, action);
    expect(newState).toEqual({ 
        '1': {
            name: 'client#1',
            email: 'client1@client.com',
            password: 'client',
            _id: '1'
        },
        '2': {
            name: 'client#2',
            email: 'client2@client.com',
            password: 'client',
            _id: '2'
        }
    });
});

it('handles actions of EDIT_CLIENT', () => {
    const action = {
        type: EDIT_CLIENT,
        payload: {
            name: 'editted_client#1',
            email: 'editted_client1@client.com',
            password: 'edditted_client',
            _id: '1'
        }
    }
    const newState = clientReducer({},action);
    expect(newState).toEqual({
        '1': {
            name: 'editted_client#1',
            email: 'editted_client1@client.com',
            password: 'edditted_client',
            _id: '1'
        }
    })
});

it('handles actions of TOG_CLIENT_STATUS', () => {
    const action = {
        type: TOG_CLIENT_STATUS,
        payload: {
            name: 'client#1',
            email: 'client1@client.com',
            password: 'client',
            _id: '1',
            verification_status: true,
            account_status: true,
            server_status: true,
        }
    }
    const newState = clientReducer({}, action)
    expect(newState).toEqual({
        '1': {
            name: 'client#1',
            email: 'client1@client.com',
            password: 'client',
            _id: '1',
            verification_status: true,
            account_status: true,
            server_status: true
        }
    })
});

it('handles actions of UPDATE_CLIENT_FILTER', () => {
    const action = {
        type: UPDATE_CLIENT_FILTER,
        payload: {
            name: 'client#1',
            email: 'client1@client.com',
            password: 'client',
            _id: '1',
            job_title: ["developer"],
            location: ["Australia"]
        }
    }
    const newState = clientReducer({}, action)
    expect(newState).toEqual({
        '1': {
            name: 'client#1',
            email: 'client1@client.com',
            password: 'client',
            _id: '1',
            job_title: ["developer"],
            location: ['Australia']
        }
    })
});

it('handles actions of DESTROY_CLIENT', () => {
    const action = {
        type: DESTROY_CLIENT,
        payload: {
            name: 'client#1',
            email: 'client1@client.com',
            password: 'client',
            _id: '1'
        }        
    }
    const newState = clientReducer({},action);
    expect(newState).toEqual({});
});

it('handles an unknown action', () => {
    const newState = clientReducer({},{});
    expect(newState).toEqual({});
});

