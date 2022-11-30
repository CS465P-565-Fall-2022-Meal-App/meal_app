/** @format */

import React from 'react';

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
              <span className="text-muted"> API Expert</span>
            </h2>

            <p className="lead">
              Hello, my name is Jeremiah. I am a graduate student at PSU,
              expecting to graduate in December of 2022. I worked on the backend
              components for fetching data on search and browse, using primarily
              React and React-Bootstrap.
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
              <span className="text-muted"> Frontend Expert.</span>
            </h2>
            <p className="lead">
              Hi everyone! This is Juhi and I am a Computer Science Graduate Student at Portland State University. Connect with me on :- 
              <a href="https://www.linkedin.com/in/juhikamaraj/">
                <b>Linkedin</b>
              </a>
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
              <span className="text-muted"> Frontend Expert</span>
            </h2>
            <p className="lead">
              Hello my name is Akash and I am a Graduate Student at PSU and a
              Level 2 Gas Systems Technician at Intel. I was responsible for the
              front end development of this website. Connect with me on : -
              <a href="https://www.linkedin.com/in/akash-kumar-chaurasia-88a99017a/">
                <b>Linkedin</b>
              </a>
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
