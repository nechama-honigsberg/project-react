// apiMiddleware.js
import axios from 'axios';
// import { addItemSuccess, addItemFailure } from './actions'; // Replace with your actual action creators
import { addItem } from '../itemSlice';


const addItemMiddleware = (store) => (next) => async (action) => {
    if (action.type === 'ADD_ITEM_REQUEST') {
        try {
            // Assuming action.payload contains the item data
            const response = await axios.post('http://localhost:3001/images', action.payload);
            console.log('addItemMiddleware111');
            // Dispatch success action with the received data
            store.dispatch(addItem(response.data));
            console.log('addItemMiddleware222');

        } catch (error) {
            // Dispatch failure action with the error
            //   store.dispatch(addItemFailure(error.message));
        }
    }

    // Pass the action to the next middleware or reducer
    return next(action);
};

export default addItemMiddleware;
