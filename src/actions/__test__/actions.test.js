import { 
    CREATE_CLIENT,
    FETCH_CLIENT_LIST,
    SELECT_CLIENT,
    TOG_CLIENT_STATUS,
    UPDATE_CLIENT_FILTER,
    RESET_SELECTED_CLIENT,
    EDIT_CLIENT,
    DESTROY_CLIENT,
    SEARCH_CLIENT
} from '../types';

import {
    createClient,
    fetchClientList,
    editClient,
    destroyClient,
    selectClient,
    resetSelectedClient,
    toggleClientStatus,
    updateClientFilter,
    searchClient,
    pinCodeVerification
} from '../index';
import moxios from 'moxios';

// describe('create client', () => {
//     it('has the correct type', () => {
//         moxios.install();
//         moxios.wait(() => {
//             const request = moxios.requests.mostRecent();
//             request.respondWith({
//                 status: 200,
//                 response: [{name: 'client#1'}, {name: 'client#2'}]
//             })
//         })

//         const expectedActions = [{
//             type: CREATE_CLIENT
//         }]


//         const action = createClient()
//         expect(action.type).toEqual(CREATE_CLIENT)
//     });
// });

describe('selects client', () => {
    it('has the correct type', () => {
        const action = selectClient()
        expect(action.type).toEqual(SELECT_CLIENT);
    })
})

//TODO Test more actions