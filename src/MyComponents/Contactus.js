//import React from "react";
import emailjs from "emailjs-com";
import React, { useState } from "react";

export default function Contactus() {
  const [Name, setFirstName] = useState("");
  const [uemail, setemail] = useState("");
  const [usubject, setsubject] = useState("");
  const [umessage, setmessage] = useState("");
  const [numbers, setnumber] = useState("");
  //const [emailpattern, setemailpattern] = useState("");

  const [error, setError] = useState(false);
  function sendemail(e) {
    let numbers = /^[0-9]+$/;
    //let emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    e.preventDefault();
    if (
      Name.length == 0 ||
      Name.match(numbers) ||
      uemail.length == 0 ||
      usubject.length == 0 ||
      umessage.lenght == 0
    ) {
      setError(true);
    } else {
      emailjs
        .sendForm(
          "service_2oxpx1c",
          "template_l9vg15e",
          e.target,
          "VkuCkmttyUkqofqH_"
        )
        .then((res) => {
          alert("Thank you, our team will contact you shortly!");
        })
        .catch((err) => {
          console.log(err);
        });
      e.target.reset();
    }
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
            onChange={(e) =>
              setFirstName(e.target.value) && setnumber(e.target.value)
            }
          />

          {error && Name.length <= 0 && Name.match(numbers) ? (
            <label class="validationmessage">Name is Required </label>
          ) : (
            ""
          )}
          {error && Name.match(numbers) ? (
            <label class="validationmessage">Name can't be a number</label>
          ) : (
            ""
          )}
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput2">Your Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="Enter your Email"
            name="user_emailaddress"
            onChange={(e) => setemail(e.target.value)}
          />
          {error && uemail.length <= 0 ? (
            <label class="validationmessage">Email is Required</label>
          ) : (
            ""
          )}
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Subject</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Enter Subject"
            name="user_subject"
            onChange={(e) => setsubject(e.target.value)}
          />
          {error && usubject.length <= 0 ? (
            <label class="validationmessage">Subject is Required</label>
          ) : (
            ""
          )}
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea2">Your Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea2"
            rows="3"
            placeholder="Enter your Message"
            name="user_message"
            onChange={(e) => setmessage(e.target.value)}
          ></textarea>
          {error && umessage.length <= 0 ? (
            <label class="validationmessage">Message is Required</label>
          ) : (
            ""
          )}
        </div>
        <input type="submit" value="Submit" class="btn btn-primary" />
      </form>
    </div>
  );
}
