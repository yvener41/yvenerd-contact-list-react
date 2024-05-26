import React from "react";

const AddContact = () => {
     return (
         <>
              <div className="container">
               <h2>Add a New Contact</h2>
                  <form className="row g-3 text-start">

                  <div className="col-12">
                 <label for="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter Full Name" />
                   </div>

                   <div className="col-12">
                 <label for="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter Email" />
                   </div>

                   <div className="col-12">
                 <label for="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="Enter Phone" />
                   </div>

                   <div className="col-12">
                 <label for="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter Address" />
                   </div>

                   <div className="col-12 d-grid gap-2">
                   <button class="btn btn-primary" type="button">Update</button>
                   </div>

                   <div className="col-12">
                    <a href="#">Or get back to contacts</a>
                   </div>

                  </form>
                  </div>
         </>
     );
}

export default AddContact;