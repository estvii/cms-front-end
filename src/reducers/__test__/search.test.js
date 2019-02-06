import searchReducer from '../searchReducer';
import { 
    SEARCH_CLIENT
} from '../../actions/types'

it('handles actions of SEARCH_CLIENT', () => {
    const action = {
        type: SEARCH_CLIENT,
        payload: "client#1"
    }
    const newState = searchReducer('',action)
    expect(newState).toEqual("client#1");
});

it('handles unknown actions', () => {
    const newState = searchReducer('',{})
    expect(newState).toEqual('');
});