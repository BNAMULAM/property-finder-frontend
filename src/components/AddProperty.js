import React,{useState,useEffect} from "react"
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {addProperty,getProperty,getAllProperty} from "../actions/propertyAction";

const AddProperty = (props) =>{
    
    const dispatch = useDispatch();
    const loginResp = useSelector((state)=>state.getLogin.getLoginResp)
    const handleAddProperty = (obj) =>{
        if(!(obj.name && obj.type && obj.purpose && obj.amount && obj.state && obj.district && obj.area) || obj.type=="false" || obj.purpose=="false"){
            alert("all fields are mandatory");
            return;
        }
        obj.amount = parseInt(obj.amount)
        if(obj.amount<=0){
            alert("amount cannot be less than or equal to 0");
            return;
        }
        dispatch(addProperty(obj));
        dispatch(getProperty(loginResp.data.userName));
        dispatch(getAllProperty());
        props.onHide()
    }
    const addPropertyObj={
        ownerId:loginResp.data.userName
    }
    return(
        <>
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Add Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="Text"
                        autoFocus
                        placeholder="Property Name"
                        onChange={(e)=>{addPropertyObj.name=(e.target.value)}}
                    /><br />
                    <Form.Label>Type</Form.Label>
                    <Form.Select 
                        type="Text"
                        placeholder="Type"
                        onChange={(e)=>{addPropertyObj.type=(e.target.value)}}
                    >
                        <option value="false">Choose</option>
                        <option value="COMMERCIAL">COMMERCIAL</option>
                        <option value="RESIDENNTIAL">RESIDENNTIAL</option>
                    </Form.Select>
                    <Form.Label>Purpose</Form.Label>
                    <Form.Select 
                        type="Text"
                        placeholder="Purpose"
                        onChange={(e)=>{addPropertyObj.purpose=(e.target.value)}}
                    >
                        <option value="false">Choose</option>
                        <option value="SELL">SELL</option>
                        <option value="RENT">RENT</option>
                    </Form.Select>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        type="Number"
                        placeholder="Amount"
                        onChange={(e)=>{
                            addPropertyObj.amount=(e.target.value);
                        }}
                    /><br />
                    
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="State"
                        onChange={(e)=>{
                            addPropertyObj.state=(e.target.value);
                        }}
                    /><br />
                    <Form.Label>District</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="District"
                        onChange={(e)=>{
                            addPropertyObj.district=(e.target.value);
                        }}
                    /><br />
                    <Form.Label>Area</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="Area"
                        onChange={(e)=>{
                            addPropertyObj.area=(e.target.value);
                        }}
                    /><br />
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={props.onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{
                handleAddProperty(addPropertyObj);}}>
                Add Item
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default AddProperty;