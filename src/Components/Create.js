import React from "react";

const Create = () => {
  return <>
  
  <form>
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div className="mb-3">

    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
  </div>
 
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  
  </>;
   
    
};


export default Create;
