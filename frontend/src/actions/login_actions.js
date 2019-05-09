// All Login actions should be done, variables must be imported from types.js
import { SUBMIT_LOGIN } from './types';
import axios from "axios";

//const ROOT_URL = "http://localhost:3001";

export const submit_login = (email_id, password) => async dispatch => {

    // alert("Actions : verfying login...");
    axios.defaults.withCredentials = true;
    const data = {
        email_id: email_id,
        password: password,
    }
    console.log(data);

    /********************LOGIN **************************/
    await axios.post('http://localhost:3001/login', data)
        .then(response => {
            // alert("response received after login :", response.status);
            console.log("response",response.status);
            console.log(response.data)
            if(response.status == 200){
            console.log('Token'+response.data.taoken)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem('user_id',response.data.user_id)
            localStorage.setItem('topic_count',response.data.topics.length)
            dispatch({
                type: SUBMIT_LOGIN,
                payload: response.status,
            })
        }
        else{
            dispatch({
                //ERROR 400 status
                type: SUBMIT_LOGIN,
                payload: response.status,

            })
        }
        })
        .catch((error) => {
            // alert('login action error')
            console.log("Action Catch : ", error.response.status);

            dispatch({
                //ERROR 400 status
                type: SUBMIT_LOGIN,
                payload: error.response.status,

            })
        })
}
