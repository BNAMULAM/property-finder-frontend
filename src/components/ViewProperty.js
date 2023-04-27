import React, { useEffect, useInsertionEffect, useState } from "react"
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { deleteProperty ,updateProperty,getProperty,getAllProperty} from "../actions/propertyAction";
import {getPropertyByCustomer,purchaseProperty} from "../actions/customerAction";

const ViewProperty = (props)=>{
    
    const [data,setData] = useState(props.data);
    const dispatch = useDispatch();
    const [updatePropertyData,setUpdatePropertyData] = useState('');
    const [showUpdatePropertModal,setShowUpdatePropertModal] = useState(false);
   const loginResp = useSelector((state)=>state.getLogin.getLoginResp)
   const customerPropertyResp = useSelector((state)=>state.getPropertyByCustomer.getPropertyByCustomerResp)
    const allPropertyResp = useSelector((state)=>state.getAllProperty.getAllPropertyResp)
    
   const [dataIds,setDataIds] = useState([]);

    useEffect(()=>{
        
        setData(props.data)
    },[props.data])

    useInsertionEffect(()=>{
        var lst = [];
        customerPropertyResp && customerPropertyResp.map((val)=>{
            lst.push(val.id);
        })
        setDataIds(lst);
    },[customerPropertyResp])

    const purchasePropertyfun = (val) =>{
        if (window.confirm(`Are you sure, you want to purchase ${val.name} for ${val.amount}$ ?`)) {
            dispatch(purchaseProperty(val.id,loginResp.data.userName));
            dispatch(getProperty(loginResp.data.userName));
            dispatch(getAllProperty());
      }  
    }

    const deletePropertyfun = (val)=>{
        if (window.confirm(`Are you sure, you want to delete property ${val.name}`)) {
            dispatch(deleteProperty(val.id))
            dispatch(getProperty(loginResp.data.userName));
            dispatch(getAllProperty());
      }  
    }
    
    

    const UpdatePropertyModal = (propsModal)=>{
        if(!propsModal.data) return

        
        const updatePropertyfun = (val,currentVal) =>{
            val.amount = parseInt(val.amount)
            if(val.amount<=0){
                alert("amount cannot be less than or equal to 0");
                return;
            }
            const updatedValues = {
                name: val.name? val.name: currentVal.name,
                ownerId: currentVal.ownerId,
                type: val.type? val.type: currentVal.propertyType,
                purpose: val.purpose? val.purpose: currentVal.propertyPurpose,
                amount: val.amount? parseInt(val.amount): currentVal.amount,
                state: val.state? val.state: currentVal.location.stateId.name,
                district: val.district? val.district: currentVal.location.districtId.name,
                area: val.area? val.area: currentVal.location.areaId.name,
              }
            dispatch(updateProperty(currentVal.id,updatedValues))
            dispatch(getProperty(loginResp.userName));
            dispatch(getAllProperty());
            propsModal.onHide();
            console.log("--->",updatedValues,currentVal)
        }
        const currentVal = propsModal.data
       const val = {}
        return(
            <Modal {...propsModal}>
                <Modal.Header closeButton>
                <Modal.Title>Update Property</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={currentVal.name}
                            onChange={(e)=>{val.name=(e.target.value)}}
                        /><br />
                        <Form.Label>Type</Form.Label>
                        <Form.Select 
                            type="Text"
                            placeholder={currentVal.type}
                            onChange={(e)=>{val.type=(e.target.value)}}
                        >
                            <option value="false">Choose</option>
                            <option value="COMMERCIAL">COMMERCIAL</option>
                            <option value="RESIDENNTIAL">RESIDENNTIAL</option>
                        </Form.Select>
                        <Form.Label>Purpose</Form.Label>
                        <Form.Select 
                            type="Text"
                            placeholder={currentVal.purpose}
                            onChange={(e)=>{val.purpose=(e.target.value)}}
                        >
                            <option value="false">Choose</option>
                            <option value="SELL">SELL</option>
                            <option value="RENT">RENT</option>
                        </Form.Select>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="Number"
                            placeholder={currentVal.amount}
                            onChange={(e)=>{val.amount=(e.target.value)}}
                        /><br />
                        
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={currentVal.location.stateId.name}
                            onChange={(e)=>{
                                val.state=(e.target.value);
                            }}
                        /><br />
                        <Form.Label>District</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={currentVal.location.districtId.name}
                            onChange={(e)=>{
                                val.district=(e.target.value);
                            }}
                        /><br />
                        <Form.Label>Area</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={currentVal.location.areaId.name}
                            onChange={(e)=>{
                                val.area=(e.target.value);
                            }}
                        /><br />
                        
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={propsModal.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{
                    updatePropertyfun(val,currentVal);
                }}>
                    Update
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return(
        <>
        <UpdatePropertyModal
            data={updatePropertyData}
            show={showUpdatePropertModal}
            onHide={()=>{setShowUpdatePropertModal(false)}}
        />
            <div style = {{padding:"200px",paddingTop:"20px"}}>
                {
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Owner Id</th>
                                <th>customer Id</th>
                                <th>Property Type</th>
                                <th>Purpose</th>
                                <th>Amount</th>
                                <th>State</th>
                                <th>District</th>
                                <th>Area</th>
                                {
                                    props.editable || props.customer?
                                    <th>Action</th>:
                                    null
                                }
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data && data.map((val)=>{
                                return(
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.ownerId}</td>
                                    <td>{val.customerId?val.customerId:"Not Purchased"}</td>
                                    <td>{val.propertyType}</td>
                                    <td>{val.propertyPurpose}</td>
                                    <td>{val.amount.toFixed(2)}</td>
                                    <td>{val.location.stateId.name}</td>
                                    <td>{val.location.districtId.name}</td>
                                    <td>{val.location.areaId.name}</td>
                                    {
                                        props.editable?
                                        <td>
                                            <button  onClick={()=>{
                                                setUpdatePropertyData(val);
                                                setShowUpdatePropertModal(true);
                                                }}>Update</button>&nbsp;&nbsp;&nbsp;
                                            <button onClick={()=>deletePropertyfun(val)}>Delete</button>
                                        </td>:
                                        null
                                     }
                                     {
                                        props.customer?
                                        <td>
                                            <button
                                            disabled={dataIds && dataIds.includes(val.id)}
                                            onClick={()=>{
                                                purchasePropertyfun(val);
                                                }}>Purchase</button>&nbsp;&nbsp;&nbsp;
                                        </td>:
                                        null
                                     }
                                </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                }
            </div>
        </> 
    )
}

export default ViewProperty