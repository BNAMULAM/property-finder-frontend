import axios from 'axios';
import API from "../constants/api.json"
export const addProperty = (obj)=> async dispatch=> {
  await axios
    .post(API.addProperty, obj)
  .then((resp)=>{
    dispatch({
      type:"ADD_PROPERTY",
      payload:resp.data
    })
    alert("Property Added")
  })
  .catch((err)=>{
    dispatch({
      type:"ADD_PROPERTY_ERR",
      payload:err.response
    })
    alert("Property Adding Failed")
  });  
};

export const getProperty = (ownerId)=> async dispatch=> {
    await axios
      .get(API.getProperty+ownerId)
    .then((resp)=>{
      dispatch({
        type:"GET_PROPERTY",
        payload:resp.data
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_PROPERTY_ERR",
        payload:err.response
      })
      alert("Something went wrong while getting Propertys");
    });  
  };

  
export const getAllProperty = ()=> async dispatch=> {
    await axios
      .get(API.getAllProperty)
    .then((resp)=>{
      dispatch({
        type:"GET_ALL_PROPERTY",
        payload:resp.data
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_ALL_PROPERTY_ERR",
        payload:err.response
      })
      alert("Something went wrong while getting Propertys");
    });  
  };

  export const deleteProperty = (propertyId)=> async dispatch=> {
    await axios
      .delete(API.deleteProperty+propertyId)
    .then((resp)=>{
      dispatch({
        type:"DELETE_PROPERTY",
        payload:resp.data
      })
      alert("Property deleted.");
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_PROPERTY_ERR",
        payload:err.response
      })
      alert("Something went wrong while Deleting Propertys");
    });  
  };
  export const updateProperty = (id,obj)=> async dispatch=> {
    await axios
      .put(API.updateProperty+id,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_PROPERTY",
        payload:resp.data
      })
      alert("Property Updated.");
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_PROPERTY_ERR",
        payload:err.response
      })
      alert("Something went wrong while Updating Propertys");
    });  
  };


