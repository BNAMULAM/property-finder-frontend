import React,{useState} from 'react';
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import AddProperty from './AddProperty';
import { useDispatch, useSelector } from "react-redux";
import {getProperty,getAllProperty} from "../actions/propertyAction";
import ViewProperty from './ViewProperty';
import {getPropertyByCustomer} from "../actions/customerAction";

const CustomerHome = () =>{
    const dispatch = useDispatch();
    const loginResp = useSelector((state)=>state.getLogin.getLoginResp)
    const ownerPropertyResp = useSelector((state)=>state.getProperty.getPropertyResp)
    const customerPropertyResp = useSelector((state)=>state.getPropertyByCustomer.getPropertyByCustomerResp)
    const allPropertyResp = useSelector((state)=>state.getAllProperty.getAllPropertyResp)
    const [showPropertyAddModal,setShowPropertyAddModal]=useState(false);
    const [showOwnerProperty,setShowOwnerProperty] = useState(false);
    const [showAllProperty,setShowAllProperty] = useState(false);
    window.onload = function () {
        if(!loginResp)
            window.location = "/";
        }.bind(this);

    return (
        <>
            <AddProperty
                show={showPropertyAddModal}
                onHide={()=>{setShowPropertyAddModal(false)}}
            />
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/">Property Finder<a href="/"></a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link 
                            style={{ paddingLeft: '440px' }}
                            onClick={()=>{
                                dispatch(getPropertyByCustomer(loginResp.data.userName))
                                setShowAllProperty(false);
                                setShowOwnerProperty(!showOwnerProperty);
                            }}>View my Properties</Nav.Link>
                            <Nav.Link onClick={()=>{
                                dispatch(getPropertyByCustomer(loginResp.data.userName))
                                dispatch(getAllProperty());
                                setShowAllProperty(!showAllProperty);
                                setShowOwnerProperty(false)
                            }}>View All Properties</Nav.Link>
                            <Nav.Link 
                            style={{ paddingLeft: '440px' }}
                            href="/">Logout</Nav.Link>
                        </Nav>
                         </Navbar.Collapse>
                            
                    </Container>
                </Navbar>
            
            {
                showOwnerProperty?
                <ViewProperty
                    data = {customerPropertyResp}
                />:
                null
            }

            {
                showAllProperty?
                <ViewProperty
                    data = {allPropertyResp}
                    customer
                />:
                null
            }
        </>
    )
}

export default CustomerHome;