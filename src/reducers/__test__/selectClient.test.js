import selectClientReducer from '../selectClientReducer';
import { 
    SELECT_CLIENT,
    CREATE_CLIENT,
    RESET_SELECTED_CLIENT,
    DESTROY_CLIENT
} from '../../actions/types'

it('handles actions of SELECT_CLIENT', () => {
    const action = {
        type: SELECT_CLIENT,
        payload: {
            name: 'client#1',
            email: 'client#1@client.com',
            password: 'client',
            _id: '1'
        }
    }
    const newState=selectClientReducer({}, action);
    expect(newState).toEqual({_id: '1'})
});

it('handles actions of CREATE_CLIENT', () => {
    const action = {
        type: CREATE_CLIENT,
        payload: {
            name: 'client#1',
            email: 'client#1@client.com',
            password: 'client',
            _id: '1'
        }
    }
    const newState=selectClientReducer({}, action);
    expect(newState).toEqual({_id: '1'})
});


let originalValues;
describe('sets initial values before setting it', () => {
    beforeEach(() => {
        originalValues = {
            type: SELECT_CLIENT,
            payload: {
                name: 'client#1',
                email: 'client#1@client.com',
                password: 'client',
                _id: '1'
            }
        }
    });

    it('handles actions RESET_SELECTED_CLIENT', () => {
        const initialState=selectClientReducer({}, originalValues)
        expect(initialState).toEqual({_id: '1'})
        const action = {
            type: RESET_SELECTED_CLIENT,
        }
        const newState=selectClientReducer({}, action);
        expect(newState).toEqual({});
    });

    it('handles actions DESTROY_CLIENT', () => {
        const initialState=selectClientReducer({}, originalValues)
        expect(initialState).toEqual({_id: '1'})
        const action = {
            type: DESTROY_CLIENT,
        }
        const newState=selectClientReducer({}, action);
        expect(newState).toEqual({});
    });
})