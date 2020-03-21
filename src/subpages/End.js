import React from "react"
import Fade from "react-reveal/Fade"

export default function End() {
  return (
    <div id="contact"
      className="container-fluid"
      style={{ backgroundColor: "#FFCD6C", color: "black" }}
    >
      <form name="contact" action="/" method="post" netlify-honeypot="bot-field" data-netlify="true">
      <div className="container">
        <div className="flexbox">
          <Fade left>
            <input type="hidden" name="bot-field" />
            <h1 className="text-center my-5">Stay in touch</h1>
              <input type="hidden" name="bot-field" />
              <div className="row my-4">
                <div className="col-lg-6 mb-4">
                  <input
                    type="text"
                    name="name"
                    className="inputBox"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-lg-6 mb-4">
                  <input
                    type="email"
                    name="email"
                    className="inputBox"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <textarea name="message" rows="5" className="inputBox mb-4" placeholder="Your Message" />
              <button className="btn btn-light mb-4 py-3">
                Submit
              </button>   
          </Fade>
        </div>
      </div>
      </form>
    </div>
  )
}
