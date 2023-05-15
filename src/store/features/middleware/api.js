import axios from "axios";
import * as actions from '../api'


const api = ({ dispatch }) => next => async action => {
    // console.log('actiontype', actions.apiCallBegan.type)
    console.log('apiaction', action)
    
    if(action.type !== actions.apiCallBegan.type) {
        return next(action);  
    }
    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;

   try {
    const response = await axios.request({
        baseURL: 'http://localhost:3000',
        url,
        method,
        data
    })
    console.log('res', response.data)
    dispatch({ type: onSuccess, payload: response.data})
   } catch (error) {
    dispatch({ type: onError, payload: error})
   }
}

export default api;