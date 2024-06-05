import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContact = () => {

    const { store,actions } = useContext(Context);
    const [name,setName] = useState("");
    const [address,setAddress] = useState(""); 
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    
    
    let navigate = useNavigate();

    const submitContact = (e) => {
        e.preventDefault()
        // console.log(name,email,phone,address)
        actions.setNewContact(name,address,phone,email)
        setName("");
        setAddress("");
        setPhone("");
        setEmail("");
        navigate("/") 
    }

    return (
        <>
             <form>
                <div className="mb-3 me-3 ps-3">
                    <label htmlFor="exampleInputName1" className="form-label">Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="exampleInputName1" placeholder="Full Name" />
                </div>
                <div className="mb-3 me-3 ps-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
                </div>
                <div className="mb-3 me-3 ps-3">
                    <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
                    <input onChange={(e) => setPhone(e.target.value)} value={phone} type="tel" className="form-control" id="exampleInputPhone1" placeholder="Enter Phone" />
                </div>
                <div className="mb-3 me-3 ps-3">
                    <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
                    <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" className="form-control" id="exampleInputAddress1" placeholder="Enter Address" />
                </div>
                <div className="d-grid gap-2">
                <button onClick={submitContact} type="submit" className="btn btn-dark">Save</button>
                </div>
                <a href="/">Or get back to home</a>
            </form>
        </>
    );
}

export default AddContact;