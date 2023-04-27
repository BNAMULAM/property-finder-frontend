import { combineReducers } from "redux";

import {
    registerLogin,
    getLogin,
} from "./loginReducer";

import {
  addProperty,
  getProperty,
  getAllProperty,
  deleteProperty,
  updateProperty
} from "./propertyReducer"

import {
    purchaseProperty,
  getPropertyByCustomer
} from "./customerReducer"


const rootReducer = combineReducers({
    
    registerLogin,
    getLogin,
    addProperty,
    getProperty,
    getAllProperty,
    deleteProperty,
    updateProperty,
    purchaseProperty,
  getPropertyByCustomer
});

export default rootReducer;