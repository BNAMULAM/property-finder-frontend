import axios from 'axios';
import API from '../constants/api.json';

export const loginAction = (userName)=> async dispatch=> {
  axios
    .get(API.login+userName)
    .then((res)=>{
      dispatch({
        type:"GET_LOGIN",
        payload:res
      })

    })
    .catch((err)=>{
      dispatch({
        type:"GET_LOGIN_ERR",
        payload:err.response
      })
    });
};

export const registerAction = (obj)=> async dispatch=> {
  await axios
    .post(API.register, obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_LOGIN",
      payload:resp.data
    })
    alert("Registeration Success Please SignIn")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_LOGIN_ERR",
      payload:err.response
    })
    alert("registeration failed")
  });  
};