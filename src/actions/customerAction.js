import axios from 'axios';
import API from "../constants/api.json"
export const purchaseProperty = (propId,custId)=> async dispatch=> {
    await axios
    .post(API.purchaseProperty+`?propertyId=${propId}&cutomerId=${custId}`)
  .then((resp)=>{
    dispatch({
      type:"PURCHASE_PROPERTY",
      payload:resp.data
    })
    alert("Property Purchased")
  })
  .catch((err)=>{
    dispatch({
      type:"PURCHASE_PROPERTY_ERR",
      payload:err.response
    })
    alert("Property Purchasing Failed")
  });  
};

export const getPropertyByCustomer = (customerId)=> async dispatch=> {
    await axios
      .get(API.getPropertyByCustomer+customerId)
    .then((resp)=>{
      dispatch({
        type:"GET_CUST_PROPERTY",
        payload:resp.data
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_CUST_PROPERTY_ERR",
        payload:err.response
      })
      alert("Something went wrong while getting Propertys");
    });  
  };
