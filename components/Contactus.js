import React from "react";
import emailjs from "emailjs-com";

export default function Contactus() {
  function sendemail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2oxpx1c",
        "template_l9vg15e",
        e.target,
        "VkuCkmttyUkqofqH_"
      )
      .then((res) => {
        alert("Email sent Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  }
  return (
    
    <div class="container my-4">
      <h2>Contact Us</h2>
      <form onSubmit={sendemail}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Your Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your name"
            name="user_name"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Your Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your Email"
            name="user_emailaddress"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Subject</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Subject"
            name="user_subject"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea2">Your Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea2"
            rows="3"
            placeholder="Enter your Message"
            name="user_message"
          ></textarea>
        </div>
        <input type="submit" value="Submit" class="btn btn-primary" />
      </form>
    </div>
  );
}
