import React from "react";

export default function About() {
  return (
    <>
      <center>
        <h1>Meet Our Foodie Team</h1>
      </center>
      <div className="container my-4">
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Jeremiah
              <span className="text-muted">API Expert</span>
            </h2>

            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src="about-1.jpg" alt="" />
          </div>
        </div>
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Juhi
              <span className="text-muted">Middleware Expert.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="img-fluid" src="about-2.jpg" alt="" />
          </div>
        </div>
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Akash
              <span className="text-muted">Frontend Expert</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src="about-3.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
