// import React from "react";

function componente() {
  return <>
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Open Modal
</button>
<div className="modal fade"  id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium nisi nunc, 
        sit amet tincidunt ipsum faucibus vitae. Pellentesque eget odio tristique, mattis elit id.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-subtle" data-bs-dismiss="modal">Secondary Action</button>
        <button type="button" className="btn btn-primary">Confirm</button>
      </div>
    </div>
  </div>
</div>
  </>;
}

export default componente;
