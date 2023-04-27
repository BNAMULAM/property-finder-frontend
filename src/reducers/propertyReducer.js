export const addProperty =  (
    state={
      addPropertyResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "ADD_PROPERTY":
            return({
                addPropertyResp:action.payload
            })
          case "ADD_PROPERTY_ERR":
          return({
            addPropertyResp:action.payload
          })
          case "RESET":
          return({
            addPropertyResp:""
          })
          default:
            return state;
        }
  };

  export const getProperty =  (
    state={
      getPropertyResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_PROPERTY":
            return({
                getPropertyResp:action.payload
            })
          case "GET_PROPERTY_ERR":
          return({
            getPropertyResp:action.payload
          })
          case "RESET":
          return({
            getPropertyResp:""
          })
          default:
            return state;
        }
  };

  
  export const getAllProperty =  (
    state={
      getAllPropertyResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_ALL_PROPERTY":
            return({
                getAllPropertyResp:action.payload
            })
          case "GET_ALL_PROPERTY_ERR":
          return({
            getAllPropertyResp:action.payload
          })
          case "RESET":
          return({
            getAllPropertyResp:""
          })
          default:
            return state;
        }
  };


  export const deleteProperty =  (
    state={
      deletePropertyResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "DELETE_PROPERTY":
            return({
                deletePropertyResp:action.payload
            })
          case "DELETE_PROPERTY_ERR":
          return({
            deletePropertyResp:action.payload
          })
          case "RESET":
          return({
            deletePropertyResp:""
          })
          default:
            return state;
        }
  };
  
  export const updateProperty =  (
    state={
      updatePropertyResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "UPDATE_PROPERTY":
            return({
                updatePropertyResp:action.payload
            })
          case "UPDATE_PROPERTY_ERR":
          return({
            updatePropertyResp:action.payload
          })
          case "RESET":
          return({
            updatePropertyResp:""
          })
          default:
            return state;
        }
  };